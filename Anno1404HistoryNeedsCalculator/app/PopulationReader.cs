using System.Diagnostics;

namespace Anno1404HistoryNeedsCalculator.app;

public static class PopulationReader
{
    public static Population ReadPopulation(string processName)
    {
        var population = new Population();

        if (processName.EndsWith(".exe"))
        {
            processName = processName.Remove(processName.Length - 4);
        }

        var processes = Process.GetProcessesByName(processName);
        if (processes.Length == 0)
            throw new Exception($"Could not find process with name: {processName}");
        var process = processes[0];

        var baseAddress = MemoryReader.ReadAddressLong(process, Addresses.PopulationPointer);

        population.Beggars = MemoryReader.ReadAddressInt(process, baseAddress + Addresses.Beggars);
        population.Peasants = MemoryReader.ReadAddressInt(process, baseAddress + Addresses.Peasants);
        population.Citizens = MemoryReader.ReadAddressInt(process, baseAddress + Addresses.Citizens);
        population.Patricians = MemoryReader.ReadAddressInt(process, baseAddress + Addresses.Patricians);
        population.Noblemen = MemoryReader.ReadAddressInt(process, baseAddress + Addresses.Noblemens);
        population.Nomads = MemoryReader.ReadAddressInt(process, baseAddress + Addresses.Nomads);
        population.Envoys = MemoryReader.ReadAddressInt(process, baseAddress + Addresses.Envoys);

        return population;
    }

    private static class Addresses
    {
        public const long PopulationPointer = 0x7FF7A29B7040; //0x7FF7A29B7068 //0x2097040 // 2097068
        public const int Beggars = 0xEA44;
        public const int Peasants = 0xEAE4;
        public const int Citizens = 0xEB04;
        public const int Patricians = 0xEB24;
        public const int Noblemens = 0xEB44;
        public const int Nomads = 0xEA84;
        public const int Envoys = 0xEAA4;
    }
}