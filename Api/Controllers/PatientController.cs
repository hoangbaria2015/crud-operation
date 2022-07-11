using System.Linq.Expressions;
using AutoMapper;
using Api.Models;
using Api.Controllers.Common;
using Api.Dtos.PatientDtos;
using Api.Extensions;
using Api.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class PatientController : BaseController<Patient, PatientCreateUpdateDto, PatientViewDto, PatientEditDto, PatientRequestInputDto>
{
    public PatientController(IPatientRepository patientRepository, IMapper mapper) : base(patientRepository, mapper)
    {
    }

    protected override Expression<Func<Patient, bool>> FilterGetAll(Expression<Func<Patient, bool>> filter, PatientRequestInputDto input)
    {
        if (input.Filter != null)
            filter = filter.AndAlso(x => x.Name.Contains(input.Filter));

        return filter;
    }
}