using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Contexts;

public class ApiContext : DbContext
{
    public ApiContext(DbContextOptions<ApiContext> options) : base(options)
    {
        
    }

    public DbSet<ImatisTask> Tasks { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Employee> Employees { get; set; }
    public DbSet<Patient> Patients { get; set; }
}