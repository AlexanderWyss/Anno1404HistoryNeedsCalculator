using System.Text.Json;
using Anno1404HistoryNeedsCalculator.app.exceptions;

namespace Anno1404HistoryNeedsCalculator.app;

public class AnnoService : IAnnoService
{
    private static readonly Dictionary<string, Addresses> KnownIslands = new();

    public Info GetInfo()
    {
        var savedIslands = LoadSavedIslands();
        var populationReader = new PopulationReader(ProcessLoader.GetProcess());
        var infos = KnownIslands
            .Select(island => CreateIslandInfo(populationReader, island.Key, island.Value, savedIslands))
            .Where(islandInfo => islandInfo != null).ToList();

        var global = CreateIslandInfo(populationReader, "Global", Addresses.Global);
        if (global != null)
        {
            infos.Add(global);
        }

        var localId = ResolveLocalId(populationReader);
        if (localId == null)
        {
            localId = global == null ? null : "Global";
        }
        else if (!KnownIslands.ContainsKey(localId))
        {
            var local = CreateIslandInfo(populationReader, "Local",
                Addresses.CreateIslandAddresses(long.Parse(localId)));
            if (local != null)
            {
                infos.Add(local);
                localId = "Local";
            }
        }

        return new Info(localId, infos!);
    }


    public void Register()
    {
        var populationReader = new PopulationReader(ProcessLoader.GetProcess());
        var localPointer = populationReader.ResolvePointer(Addresses.LocalPointer);
        var localId = localPointer.ToString();
        if (!KnownIslands.ContainsKey(localId))
        {
            KnownIslands.Add(localId, Addresses.CreateIslandAddresses(localPointer));
        }
    }

    private static string? ResolveLocalId(PopulationReader populationReader)
    {
        try
        {
            return populationReader.ResolvePointer(Addresses.LocalPointer).ToString();
        }
        catch (MemoryReadException ex)
        {
            Console.WriteLine(ex.ToString());
            return null;
        }
    }

    private IslandInfo? CreateIslandInfo(PopulationReader reader, string id, Addresses addresses,
        SavedIslands? savedIslands = null)
    {
        try
        {
            var population = reader.ReadPopulation(addresses);
            SavedIsland? savedIsland = null;
            if (savedIslands != null)
            {
                savedIsland = savedIslands.Islands.Find(island => island.Id == id);
            }

            return new IslandInfo(id, population, new Needs(population), savedIsland);
        }
        catch (PopulationReadException ex)
        {
            Console.WriteLine(ex.ToString());
            return null;
        }
    }

    private SavedIslands? LoadSavedIslands()
    {
        return JsonSerializer.Deserialize<SavedIslands>(File.ReadAllText(
            "C:\\Users\\alexs\\development\\Anno1404HistoryNeedsCalculator\\Anno1404HistoryNeedsCalculator\\Data\\islands.json"));
    }
}