using AutoMapper;
using Api.Models;
using Api.Controllers.Common;
using Api.Dtos.PatientDtos;
using Api.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PatientController : BaseController<Patient, PatientCreateUpdateDto, PatientViewDto, PatientEditDto, PatientRequestInputDto>
{
    public PatientController(IPatientRepository patientRepository, IMapper mapper) : base(patientRepository, mapper)
    {
    }
}