using System.Diagnostics;
using System.Runtime.InteropServices;
using Anno1404HistoryNeedsCalculator.app.exceptions;

namespace Anno1404HistoryNeedsCalculator.app;

public class MemoryReader
{
    private readonly Process _process;

    public MemoryReader(Process process)
    {
        _process = process;
    }

    [DllImport("kernel32.dll", SetLastError = true)]
    private static extern bool ReadProcessMemory(int hProcess, long lpBaseAddress, byte[] lpBuffer, int dwSize,
        ref int lpNumberOfBytesRead);

    [DllImport("kernel32.dll")]
    private static extern UInt32 GetLastError();

    public int ReadAddressInt(long address)
    {
        var buffer = new byte[4];
        var bytesRead = 0;
        var res = ReadProcessMemory(_process.Handle.ToInt32(), address, buffer, 4, ref bytesRead);
        if (!res)
        {
            throw new MemoryReadException(MemoryReadExceptionType.Int, address, GetLastError());
        }

        return BitConverter.ToInt32(buffer, 0);
    }

    public long ReadAddressLong(long address)
    {
        var buffer = new byte[8];
        var bytesRead = 0;
        var res = ReadProcessMemory(_process.Handle.ToInt32(), address, buffer, 8, ref bytesRead);
        if (!res)
        {
            throw new MemoryReadException(MemoryReadExceptionType.Long, address, GetLastError());
        }

        return BitConverter.ToInt64(buffer, 0);
    }
}