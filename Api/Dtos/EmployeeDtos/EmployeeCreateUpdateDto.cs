using System.ComponentModel.DataAnnotations;
using Api.Consts;

namespace Api.Dtos.EmployeeDtos;

public class EmployeeCreateUpdateDto : BaseCreateUpdateDto
{
    [MaxLength(EmpolyeeConsts.NameMaxLength)]
    public string Name { get; set; }
    
    [MaxLength(EmpolyeeConsts.PhoneNumberMaxLength)]
    public string? PhoneNumber { get; set; }
}

public class EmployeeEditDto : EmployeeCreateUpdateDto
{
}