namespace Anno1404HistoryNeedsCalculator.app;

public class Info
{
    public Info(Population population, Needs needs)
    {
        Population = population;
        Needs = needs;
    }

    public Population Population { get; }
    public Needs Needs { get; }
}

public class Population
{
    public double Beggars { get; set; }
    public double Peasants { get; set; }
    public double Citizens { get; set; }
    public double Patricians { get; set; }
    public double Noblemen { get; set; }
    public double Nomads { get; set; }
    public double Envoys { get; set; }
}

public class Needs
{
    public double Fish { get; set; }
    public double Spices { get; set; }
    public double Bread { get; set; }
    public double Meat { get; set; }
    public double Most { get; set; }
    public double Beer { get; set; }
    public double Wine { get; set; }
    public double Garments { get; set; }
    public double Jerkins { get; set; }
    public double FurCoats { get; set; }
    public double Robes { get; set; }
    public double Books { get; set; }
    public double CandleSticks { get; set; }
    public double Glasses { get; set; }
    public double Dates { get; set; }
    public double Milk { get; set; }
    public double Carpets { get; set; }
    public double Coffee { get; set; }
    public double PearNecklaces { get; set; }
    public double Perfume { get; set; }
    public double Marzipan { get; set; }
}