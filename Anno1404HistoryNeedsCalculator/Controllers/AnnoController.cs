using Anno1404HistoryNeedsCalculator.app;
using Microsoft.AspNetCore.Mvc;

namespace Anno1404HistoryNeedsCalculator.Controllers;

[ApiController]
[Route("api")]
public class AnnoController : ControllerBase
{

    private readonly ILogger<AnnoController> _logger;
    private readonly IAnnoService _service;

    public AnnoController(ILogger<AnnoController> logger, IAnnoService service)
    {
        _logger = logger;
        _service = service;
    }

    [HttpGet("info")]
    public Info GetInfo()
    {
        return _service.GetInfo();
    }
}