using Api.Contexts;
using Api.Models;
using Api.Repositories.Common;
using Api.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Api.Repositories;

public class ImatisTaskRepository : BaseRepository<ImatisTask>, IImatisTaskRepository
{
    public ImatisTaskRepository(ApiContext context) : base(context)
    {
    }

    public override async Task<ImatisTask?> GetById(Guid id)
    {
        return await Context
            .Include(x => x.Booker)
            .Include(x => x.Category)
            .Include(x => x.Patient)
            .SingleOrDefaultAsync(x => x.Id == id);
    }

    public override Task<ImatisTask> Create(ImatisTask entity)
    {
        entity.CreationTime = DateTime.Now;

        return base.Create(entity);
    }
}