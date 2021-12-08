using System.Diagnostics;

namespace Anno1404HistoryNeedsCalculator.app;

public static class PopulationReader
{
    public static Population ReadPopulation(string processName)
    {
        if (processName.EndsWith(".exe"))
        {
            processName = processName.Remove(processName.Length - 4);
        }

        var processes = Process.GetProcessesByName(processName);
        if (processes.Length == 0)
            throw new Exception($"Could not find process with name: {processName}");
        var process = processes[0];

        var baseAddress = MemoryReader.ReadAddressLong(process, Addresses.PopulationPointer);

        var population = new Population()
        {
            Beggars = MemoryReader.ReadAddressInt(process, baseAddress + Addresses.Beggars),
            Peasants = MemoryReader.ReadAddressInt(process, baseAddress + Addresses.Peasants),
            Citizens = MemoryReader.ReadAddressInt(process, baseAddress + Addresses.Citizens),
            Patricians = MemoryReader.ReadAddressInt(process, baseAddress + Addresses.Patricians),
            Noblemen = MemoryReader.ReadAddressInt(process, baseAddress + Addresses.Noblemen),
            Nomads = MemoryReader.ReadAddressInt(process, baseAddress + Addresses.Nomads),
            Envoys = MemoryReader.ReadAddressInt(process, baseAddress + Addresses.Envoys)
        };
        return population;
    }

    private static class Addresses
    {
        public const long PopulationPointer = 0x7FF7A29B7040; //0x7FF7A29B7068 //0x2097040 // 2097068
        public const int Beggars = 0xEA44;
        public const int Peasants = 0xEAE4;
        public const int Citizens = 0xEB04;
        public const int Patricians = 0xEB24;
        public const int Noblemen = 0xEB44;
        public const int Nomads = 0xEA84;
        public const int Envoys = 0xEAA4;
    }
}