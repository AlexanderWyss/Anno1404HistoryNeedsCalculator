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
    public double Beggars { get; init; }
    public double Peasants { get; init; }
    public double Citizens { get; init;}
    public double Patricians { get; init;}
    public double Noblemen { get; init;}
    public double Nomads { get; init;}
    public double Envoys { get; init;}
}

public class Needs
{
    private readonly Population _population;

    public Needs(Population population)
    {
        _population = population;
    }

    public double Fish =>
        _population.Beggars / 285 +
        _population.Peasants / 200 +
        _population.Citizens / 500 +
        _population.Patricians / 909 +
        _population.Noblemen / 1250;

    public double Spices =>
        _population.Citizens / 500 +
        _population.Patricians / 909 +
        _population.Noblemen / 1250;

    public double Bread =>
        _population.Patricians / 727 +
        _population.Noblemen / 1025;

    public double Meat =>
        _population.Noblemen / 1136;

    public double Most =>
        _population.Beggars / 500 +
        _population.Peasants / 340 +
        _population.Citizens / 340 +
        _population.Patricians / 652 +
        _population.Noblemen / 1153;

    public double Beer =>
        (_population.Patricians > 510 ? (_population.Patricians / 625) : 0) +
        _population.Noblemen / 1071;

    public double Wine =>
        (_population.Noblemen > 1500 ? (_population.Noblemen / 1000) : 0);

    public double Garments =>
        _population.Citizens / 476 +
        _population.Patricians / 1052 +
        _population.Noblemen / 2500;

    public double Jerkins =>
        (_population.Patricians > 690 ? (_population.Patricians / 1428) : 0) +
        _population.Noblemen / 2500;

    public double FurCoats =>
        (_population.Noblemen > 950 ? (_population.Noblemen / 1562) : 0);

    public double Robes =>
        (_population.Noblemen > 4000 ? (_population.Noblemen / 2112) : 0);

    public double Books =>
        (_population.Patricians > 940 ? (_population.Patricians / 1875) : 0) +
        _population.Noblemen / 3333;

    public double CandleSticks =>
        _population.Noblemen > 3000
            ? _population.Patricians / 2500 +
              _population.Noblemen / 3333
            : 0;

    public double Glasses =>
        (_population.Noblemen > 2200 ? (_population.Noblemen / 1709) : 0);

    public double Dates =>
        _population.Nomads / 450 +
        _population.Envoys / 600;

    public double Milk =>
        (_population.Nomads > 145 ? (_population.Nomads / 436) : 0) +
        _population.Envoys / 666;

    public double Carpets =>
        (_population.Nomads > 295 ? (_population.Nomads / 909) : 0) +
        _population.Envoys / 1500;

    public double Coffee =>
        _population.Envoys / 1000;

    public double PearlNecklaces =>
        (_population.Envoys > 1040 ? (_population.Envoys / 751) : 0);

    public double Perfume =>
        (_population.Envoys > 2600 ? (_population.Envoys / 1250) : 0);

    public double Marzipan =>
        (_population.Envoys > 4360 ? (_population.Envoys / 2453) : 0);
}