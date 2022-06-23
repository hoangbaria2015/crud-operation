using Api.Contexts;
using Api.Models;
using Api.Repositories.Common;
using Api.Repositories.Interfaces;

namespace Api.Repositories;

public class PatientRepository : BaseRepository<Patient>, IPatientRepository
{
    public PatientRepository(ApiContext context) : base(context)
    {
    }
}