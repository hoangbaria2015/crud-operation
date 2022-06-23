using Api.Contexts;
using Api.Models;
using Api.Repositories.Common;
using Api.Repositories.Interfaces;

namespace Api.Repositories;

public class CategoryRepository : BaseRepository<Category>, ICategoryRepository
{
    public CategoryRepository(ApiContext context) : base(context)
    {
        
    }
}