namespace Api.Dtos.CategoryDtos;

public class CategoryCreateUpdateDto : BaseCreateUpdateDto
{
    public string Name { get; set; }
}

public class CategoryEditDto : CategoryCreateUpdateDto
{
}