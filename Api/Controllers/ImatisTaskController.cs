using Api.Dtos;
using Api.Models;
using Api.Controllers.Common;
using Api.Dtos.ImatisTaskDtos;
using Api.Repositories.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ImatisTaskController 
    : BaseController<ImatisTask, ImatisTaskCreateUpdateDto, ImatisTaskViewDto, ImatisTaskEditDto, ImatisTaskRequestInputDto>
{
    public ImatisTaskController(IImatisTaskRepository repository, IMapper mapper) : base(repository, mapper)
    {
    }
}