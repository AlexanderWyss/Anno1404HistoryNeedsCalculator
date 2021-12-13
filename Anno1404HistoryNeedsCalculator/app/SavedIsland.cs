namespace Anno1404HistoryNeedsCalculator.app;

public class SavedIsland : INeeds
{
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