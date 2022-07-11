using System.Linq.Expressions;
using Api.Dtos;
using AutoMapper;
using Api.Models;
using Api.Controllers.Common;
using Api.Dtos.CategoryDtos;
using Api.Extensions;
using Api.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class CategoryController 
    : BaseController<Category, CategoryCreateUpdateDto, CategoryViewDto, CategoryEditDto, CategoryRequestInputDto>
{
    public CategoryController(ICategoryRepository cateRepository, IMapper mapper) : base(cateRepository, mapper)
    {
    }

    protected override Expression<Func<Category, bool>> FilterGetAll(Expression<Func<Category, bool>> filter, CategoryRequestInputDto input)
    {
        if (input.Filter != null)
            filter = filter.AndAlso(x => x.Name.Contains(input.Filter));

        return filter;
    }
}