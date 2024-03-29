﻿using Anno1404HistoryNeedsCalculator.app;
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

    [HttpGet("register")]
    public void Register()
    {
        _service.Register();
    }

    public class DeregisterDto
    {
        public string Id { get; set; }
    }

    [HttpPost("deregister")]
    public void Deregister(DeregisterDto dto)
    {
        _service.Deregister(dto.Id);
    }

    [HttpPost("update")]
    public void Update(SavedIsland savedIsland)
    {
        _service.Update(savedIsland);
    }

    [HttpPost("create-island")]
    public void CreateIsland(CreateIsland createIsland)
    {
        _service.CreateIsland(createIsland);
    }

    [HttpPost("map-island")]
    public void CreateIsland(MapIsland mapIsland)
    {
        _service.MapIsland(mapIsland);
    }
}