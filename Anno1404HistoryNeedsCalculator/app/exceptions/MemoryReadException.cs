namespace Anno1404HistoryNeedsCalculator.app.exceptions;

public class MemoryReadException : Exception
{
    public MemoryReadExceptionType Type { get; }

    public MemoryReadException(MemoryReadExceptionType type, long address, uint error) : base(
        $"Memory Read of type {type} at a {address} with error {error}.")
    {
        Type = type;
    }
}

public enum MemoryReadExceptionType
{
    Long,
    Int
}