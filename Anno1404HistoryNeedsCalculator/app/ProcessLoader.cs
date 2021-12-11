using System.Diagnostics;

namespace Anno1404HistoryNeedsCalculator.app;

public static class ProcessLoader
{
    public static Process GetProcess()
    {
        const string processName = "Anno1404Addon";
        var processes = Process.GetProcessesByName(processName);
        if (processes.Length == 0)
        {
            throw new Exception($"Could not find process with name: {processName}");
        }
        return processes[0];
    }
}