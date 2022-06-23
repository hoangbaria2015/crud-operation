using System.ComponentModel.DataAnnotations;
using Api.Consts;
using Api.Models.Common;

namespace Api.Models;

public class Employee : BaseEntity
{
    [MaxLength(EmpolyeeConsts.NameMaxLength)]
    public string Name { get; set; }
    
    [MaxLength(EmpolyeeConsts.PhoneNumberMaxLength)]
    public string? PhoneNumber { get; set; }
}