namespace Api.Repositories.Common;

public interface IRepository<TEntity> where TEntity : class
{
    Task<ICollection<TEntity>> GetAll();
    Task<TEntity?> GetById(Guid id);
    Task<TEntity> Create(TEntity entity);
    Task<TEntity> Update(TEntity entity);
    Task Delete(Guid id);
    Task SaveChangesAsync();
}