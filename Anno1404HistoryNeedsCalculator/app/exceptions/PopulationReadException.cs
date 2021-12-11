namespace Anno1404HistoryNeedsCalculator.app.exceptions;

public class PopulationReadException : Exception
{
    public PopulationReadException(string message, Exception exception) : base(message, exception)
    {
    }
}