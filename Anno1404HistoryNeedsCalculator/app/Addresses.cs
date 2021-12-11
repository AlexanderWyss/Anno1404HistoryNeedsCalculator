namespace Anno1404HistoryNeedsCalculator.app;

public class Addresses
{
    public static readonly Addresses Global = new(new Pointer(0x7FF7A29B7040))
    {
        Beggars = 0xEA44,
        Peasants = 0xEAE4,
        Citizens = 0xEB04,
        Patricians = 0xEB24,
        Noblemen = 0xEB44,
        Nomads = 0xEA84,
        Envoys = 0xEAA4
    };

    public static readonly Addresses Local = new(new Pointer(new[] { 0x020A7CB0, 0x1F8, 0x170 }))
    {
        Beggars = 0x54B0,
        Peasants = 0x5550,
        Citizens = 0x5570,
        Patricians = 0x5590,
        Noblemen = 0x55B0,
        Nomads = 0x54F0,
        Envoys = 0x5510
    };

    private Addresses(Pointer pointer)
    {
        Pointer = pointer;
    }

    public Pointer Pointer { get; }
    public int Beggars { get; init; }
    public int Peasants { get; init; }
    public int Citizens { get; init; }
    public int Patricians { get; init; }
    public int Noblemen { get; init; }
    public int Nomads { get; init; }
    public int Envoys { get; init; }
}

public class Pointer
{
    public Pointer(long @base) : this(@base, Array.Empty<int>())
    {
    }

    public Pointer(int[] offsets) : this(0, offsets)
    {
    }

    public Pointer(long @base, int[] offsets)
    {
        Base = @base;
        Offsets = offsets;
    }

    public long Base { get; }
    public int[] Offsets { get; }
}