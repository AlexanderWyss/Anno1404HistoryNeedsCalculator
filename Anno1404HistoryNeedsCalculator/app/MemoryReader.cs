using System.Diagnostics;
using System.Runtime.InteropServices;

namespace Anno1404HistoryNeedsCalculator.app;

public static class MemoryReader
{
    [DllImport("kernel32.dll", SetLastError = true)]
    private static extern bool ReadProcessMemory(int hProcess, long lpBaseAddress, byte[] lpBuffer, int dwSize,
        ref int lpNumberOfBytesRead);

    [DllImport("kernel32.dll")]
    private static extern UInt32 GetLastError();

    public static int ReadAddressInt(Process process, long address)
    {
        var buffer = new byte[4];
        var bytesRead = 0;
        var res = ReadProcessMemory(process.Handle.ToInt32(), address, buffer, 4, ref bytesRead);
        if (!res)
        {
            Debug.WriteLine("Read Error" + GetLastError());
            return 0;
        }
        return BitConverter.ToInt32(buffer, 0);
    }

    public static long ReadAddressLong(Process process, long address)
    {
        var buffer = new byte[8];
        var bytesRead = 0;
        var res = ReadProcessMemory(process.Handle.ToInt32(), address, buffer, 8, ref bytesRead);
        if (!res)
        {
            Debug.WriteLine("Read Error" + GetLastError());
            return 0;
        }
        return BitConverter.ToInt64(buffer, 0);
    }
}