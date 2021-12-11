using Anno1404HistoryNeedsCalculator.app.exceptions;

namespace Anno1404HistoryNeedsCalculator.app;

public class AnnoService : IAnnoService
{
    public List<Info> GetInfo()
    {
        var infos = new List<Info>();
        var populationReader = new PopulationReader(ProcessLoader.GetProcess());
        CreateAndAddInfo(populationReader, "Global", Addresses.Global, infos);
        CreateAndAddInfo(populationReader, "Local", Addresses.Local, infos);
        return infos;
    }

    private void CreateAndAddInfo(PopulationReader reader, string name, Addresses addresses, List<Info> infos)
    {
        try
        {
            var population = reader.ReadPopulation(addresses);
            infos.Add(new Info(name, population, new Needs(population)));
        }
        catch (PopulationReadException ex)
        {
            Console.WriteLine(ex.ToString());
        }
    }
}