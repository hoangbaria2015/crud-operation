using System.ComponentModel.DataAnnotations;
using Api.Consts;
using Api.Models.Common;

namespace Api.Models;

public class Patient : BaseEntity
{
    [MaxLength(PatientConsts.NameMaxLength)]
    public string Name { get; set; }
    [MaxLength(PatientConsts.SocialSecurityNumberMaxLength)]
    public string? SocialSecurityNumber { get; set; }
}