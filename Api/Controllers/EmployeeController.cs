using Api.Controllers.Common;
using Api.Dtos;
using Api.Dtos.CategoryDtos;
using Api.Dtos.EmployeeDtos;
using Api.Models;
using Api.Repositories.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmployeeController 
    : BaseController<Employee, EmployeeCreateUpdateDto, EmployeeViewDto, CategoryEditDto, CategoryRequestInputDto>
{
    public EmployeeController(IEmployeeRepository employeeRepository, IMapper mapper) : base(employeeRepository, mapper)
    {

    }
}