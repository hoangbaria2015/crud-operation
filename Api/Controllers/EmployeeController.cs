using System.Linq.Expressions;
using Api.Controllers.Common;
using Api.Dtos.CategoryDtos;
using Api.Dtos.EmployeeDtos;
using Api.Extensions;
using Api.Models;
using Api.Repositories.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class EmployeeController 
    : BaseController<Employee, EmployeeCreateUpdateDto, EmployeeViewDto, CategoryEditDto, CategoryRequestInputDto>
{
    public EmployeeController(IEmployeeRepository employeeRepository, IMapper mapper) : base(employeeRepository, mapper)
    {

    }

    protected override Expression<Func<Employee, bool>> FilterGetAll(Expression<Func<Employee, bool>> filter, CategoryRequestInputDto input)
    {
        if (input.Filter != null)
            filter = filter.AndAlso(x => x.Name.Contains(input.Filter));

        return filter;
    }
}