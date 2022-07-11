using System.Linq.Expressions;

namespace Api.Repositories.Common;

public interface IRepository<TEntity> where TEntity : class
{
    Task<ICollection<TEntity>> GetAll(ICollection<Expression<Func<TEntity, object>>> includes = null,
        Expression<Func<TEntity, bool>> filter = null);

    Task<TEntity?> GetById(Guid id);
    Task<TEntity> Create(TEntity entity);
    Task<TEntity> Update(TEntity entity);
    Task Delete(Guid id);
    Task SaveChangesAsync();
}