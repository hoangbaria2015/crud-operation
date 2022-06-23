using Api.Contexts;
using Api.Models;
using Api.Models.Common;
using Microsoft.EntityFrameworkCore;

namespace Api.Repositories.Common;

public class BaseRepository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity
{
    private readonly ApiContext _context;
    protected DbSet<TEntity> Context => _context.Set<TEntity>();

    protected BaseRepository(ApiContext context)
    {
        _context = context;
    }
    public virtual async Task<ICollection<TEntity>> GetAll()
    {
        return await Context.ToListAsync();
    }

    public virtual async Task<TEntity?> GetById(Guid id)
    {
        return await Context.SingleOrDefaultAsync(x => x.Id == id);
    }

    public virtual async Task<TEntity> Create(TEntity entity)
    {
        var result = await Context.AddAsync(entity);
        await SaveChangesAsync();
        
        return result.Entity;
    }
    
    public virtual async Task<TEntity> Update(TEntity entity)
    {
        var result = Context.Update(entity);
        await SaveChangesAsync();

        return result.Entity;
    }

    public virtual async Task Delete(Guid id)
    {
        var entity = await GetById(id);

        if (entity != null)
            _context.Remove(entity);
        
        await SaveChangesAsync();
    }

    public virtual async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }
}