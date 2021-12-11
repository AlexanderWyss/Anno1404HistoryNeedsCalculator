using System.Diagnostics;
using Anno1404HistoryNeedsCalculator.app.exceptions;

namespace Anno1404HistoryNeedsCalculator.app;

public class PopulationReader
{
    private readonly MemoryReader _memoryReader;
    private readonly Process _process;

    public PopulationReader(Process process)
    {
        _process = process;
        _memoryReader = new MemoryReader(process);
    }

    public Population ReadPopulation(Addresses addresses)
    {
        try
        {
            var baseAddress = addresses.Pointer.Base == 0
                ? _process.MainModule.BaseAddress.ToInt64()
                : _memoryReader.ReadAddressLong(addresses.Pointer.Base);
            foreach (var offset in addresses.Pointer.Offsets)
            {
                baseAddress = _memoryReader.ReadAddressLong(baseAddress + offset);
            }

            var population = new Population()
            {
                Beggars = _memoryReader.ReadAddressInt(baseAddress + addresses.Beggars),
                Peasants = _memoryReader.ReadAddressInt(baseAddress + addresses.Peasants),
                Citizens = _memoryReader.ReadAddressInt(baseAddress + addresses.Citizens),
                Patricians = _memoryReader.ReadAddressInt(baseAddress + addresses.Patricians),
                Noblemen = _memoryReader.ReadAddressInt(baseAddress + addresses.Noblemen),
                Nomads = _memoryReader.ReadAddressInt(baseAddress + addresses.Nomads),
                Envoys = _memoryReader.ReadAddressInt(baseAddress + addresses.Envoys)
            };
            return population;
        }
        catch (MemoryReadException ex)
        {
            if (ex.Type.Equals(MemoryReadExceptionType.Long))
            {
                throw new PopulationReadException("Pointer resolution failed.", ex);
            }

            throw new PopulationReadException("Population read failed.", ex);
        }
    }
}