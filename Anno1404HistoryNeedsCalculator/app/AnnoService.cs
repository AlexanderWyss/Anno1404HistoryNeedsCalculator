namespace Anno1404HistoryNeedsCalculator.app;

public class AnnoService: IAnnoService
{
    public Info GetInfo()
    {
        var population = PopulationReader.ReadPopulation("Anno1404Addon.exe");
        var needs = NeedsCalculator.CalculateNeeds(population);
        return new Info(population, needs);
    }
}