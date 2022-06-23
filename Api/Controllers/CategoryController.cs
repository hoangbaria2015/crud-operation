using Api.Dtos;
using AutoMapper;
using Api.Models;
using Api.Controllers.Common;
using Api.Dtos.CategoryDtos;
using Api.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoryController 
    : BaseController<Category, CategoryCreateUpdateDto, CategoryViewDto, CategoryEditDto, CategoryRequestInputDto>
{
    public CategoryController(ICategoryRepository cateRepository, IMapper mapper) : base(cateRepository, mapper)
    {
    }
}