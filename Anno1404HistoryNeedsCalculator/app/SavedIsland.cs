namespace Anno1404HistoryNeedsCalculator.app;

public class SavedIsland : INeeds
{
    public SavedIsland()
    {
    }

    public SavedIsland(string id, string name)
    {
        Id = id;
        Name = name;
        Fish = 0;
        Spices = 0;
        Bread = 0;
        Meat = 0;
        Most = 0;
        Beer = 0;
        Wine = 0;
        Garments = 0;
        Jerkins = 0;
        FurCoats = 0;
        Robes = 0;
        Books = 0;
        CandleSticks = 0;
        Glasses = 0;
        Dates = 0;
        Milk = 0;
        Carpets = 0;
        Coffee = 0;
        PearlNecklaces = 0;
        Perfume = 0;
        Marzipan = 0;
    }

    public string Id { get; set; }
    public string Name { get; set; }
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
    public double PearlNecklaces { get; set; }
    public double Perfume { get; set; }
    public double Marzipan { get; set; }
}

public class SavedIslands
{
    public List<SavedIsland> Islands { get; set; }
}

public class CreateIsland
{
    public string Name { get; set; }
}


public class MapIsland
{
    public string IslandId { get; set; }
    public string SavedIslandId { get; set; }
}