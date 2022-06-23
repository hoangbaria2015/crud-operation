using Api.Contexts;
using Api.Models;
using Api.Repositories.Common;
using Api.Repositories.Interfaces;

namespace Api.Repositories;

public class EmployeeRepository : BaseRepository<Employee>, IEmployeeRepository
{
    public EmployeeRepository(ApiContext context) : base(context)
    {
    }
}