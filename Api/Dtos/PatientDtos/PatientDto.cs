namespace Api.Dtos.PatientDtos;

public class PatientDto : BaseDto
{
    public string Name { get; set; }
    public string? SocialSecurityNumber { get; set; }
}

public class PatientViewDto : PatientDto
{
    
}