using System.ComponentModel.DataAnnotations;
using Api.Consts;

namespace Api.Dtos.PatientDtos;

public class PatientCreateUpdateDto : BaseCreateUpdateDto
{
    [MaxLength(PatientConsts.NameMaxLength)]
    public string Name { get; set; }
    [MaxLength(PatientConsts.SocialSecurityNumberMaxLength)]
    public string? SocialSecurityNumber { get; set; }
}

public class PatientEditDto : PatientCreateUpdateDto
{
    
}