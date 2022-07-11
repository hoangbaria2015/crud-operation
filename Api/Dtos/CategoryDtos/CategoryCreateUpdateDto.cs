using System.ComponentModel.DataAnnotations;
using Api.Consts;

namespace Api.Dtos.CategoryDtos;

public class CategoryCreateUpdateDto : BaseCreateUpdateDto
{
    [MaxLength(CategoryConsts.NameMaxLength)]
    public string Name { get; set; }
}

public class CategoryEditDto : CategoryCreateUpdateDto
{
}