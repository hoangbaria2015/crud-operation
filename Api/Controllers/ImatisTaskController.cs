using System.Linq.Expressions;
using Api.Models;
using Api.Controllers.Common;
using Api.Dtos.ImatisTaskDtos;
using Api.Extensions;
using Api.Repositories.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class ImatisTaskController
    : BaseController<ImatisTask, ImatisTaskCreateUpdateDto, ImatisTaskViewDto, ImatisTaskEditDto, ImatisTaskRequestInputDto>
{
    public ImatisTaskController(IImatisTaskRepository repository, IMapper mapper) : base(repository, mapper)
    {
    }

    protected override Expression<Func<ImatisTask, bool>> FilterGetAll(Expression<Func<ImatisTask, bool>> filter, ImatisTaskRequestInputDto input)
    {
        if (input.IsAssigned != null && input.IsAssigned.Value)
            filter = filter.AndAlso(x => x.AssignToId != null);

        if (input.IsAssigned != null && !input.IsAssigned.Value)
            filter = filter.AndAlso(x => x.AssignToId == null);

        if (input.Filter != null)
            filter = filter.AndAlso(x => x.PatientId != null && x.Patient.Name.Contains(input.Filter));

        if (input.CategoryIds != null && input.CategoryIds.Any())
        {
            filter = filter.AndAlso(x => input.CategoryIds.Contains(x.CategoryId.Value));
        }

        return filter;
    }

    protected override void IncludeGetAll(List<Expression<Func<ImatisTask, object>>> includes)
    {
        includes.Add(x => x.Category);
        includes.Add(x => x.Booker);
    }
}