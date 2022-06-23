using System.ComponentModel.DataAnnotations;
using Api.Consts;
using Api.Models.Common;

namespace Api.Models;

public class Category : BaseEntity
{
    [MaxLength(CategoryConsts.NameMaxLength)]
    public string Name { get; set; }
}