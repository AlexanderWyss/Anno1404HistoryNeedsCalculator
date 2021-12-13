namespace Anno1404HistoryNeedsCalculator.app;

public class Addresses
{
    public static readonly Addresses Global = new(new Pointer(0x7FF7A29B7040, false))
    {
        Beggars = 0xEA44,
        Peasants = 0xEAE4,
        Citizens = 0xEB04,
        Patricians = 0xEB24,
        Noblemen = 0xEB44,
        Nomads = 0xEA84,
        Envoys = 0xEAA4
    };

    public static readonly Pointer LocalPointer = new(new[] { 0x020A7CB0, 0x1F8, 0x170 });

    public static Addresses CreateIslandAddresses(long @base)
    {
        return new Addresses(new Pointer(@base, true))
        {
            Beggars = 0x54B0,
            Peasants = 0x5550,
            Citizens = 0x5570,
            Patricians = 0x5590,
            Noblemen = 0x55B0,
            Nomads = 0x54F0,
            Envoys = 0x5510
        };
    }

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
    public Pointer(long @base, bool isFixed) : this(@base, Array.Empty<int>(), isFixed)
    {
    }

    public Pointer(int[] offsets) : this(0, offsets, false)
    {
    }

    private Pointer(long @base, int[] offsets, bool isFixed)
    {
        Base = @base;
        Offsets = offsets;
        IsFixed = isFixed;
    }

    public bool IsFixed { get; }

    public long Base { get; }
    public int[] Offsets { get; }
}