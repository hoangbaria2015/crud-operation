namespace Api.Dtos.EmployeeDtos;

public class EmployeeDto : BaseDto
{
    public string Name { get; set; }
    public string? PhoneNumber { get; set; }
}

public class EmployeeViewDto : EmployeeDto
{
}