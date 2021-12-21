namespace Anno1404HistoryNeedsCalculator.app;

public interface IAnnoService
{
    public Info GetInfo();
    public void Register();
    public void Deregister(string id);
    void Update(SavedIsland savedIsland);
    void CreateIsland(CreateIsland createIsland);
    void MapIsland(MapIsland mapIsland);
}