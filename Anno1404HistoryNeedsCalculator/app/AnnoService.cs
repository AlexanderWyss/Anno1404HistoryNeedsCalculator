namespace Anno1404HistoryNeedsCalculator.app;

public class AnnoService : IAnnoService
{
    public Info[] GetInfo()
    {
        var populationReader = new PopulationReader(ProcessLoader.GetProcess());

        var populationGlobal = populationReader.ReadPopulation(Addresses.Global);
        var infoGlobal = new Info("Global", populationGlobal, new Needs(populationGlobal));

        var populationLocal = populationReader.ReadPopulation(Addresses.Local);
        var infoLocal = new Info("Local", populationLocal, new Needs(populationLocal));
        return new[] { infoGlobal, infoLocal };
    }
}