using Api.Enums;
using Api.Models;

namespace Api.Dtos.ImatisTaskDtos;
public class ImatisTaskCreateUpdateDto : BaseCreateUpdateDto
{
    public ImatisTaskStatus Status { get; set; }
    public ImatisTaskPriority Priority { get; set; }
    public Contagion? Contagion { get; set; }

    public Guid? CategoryId { get; set; }
    public Guid? PatientId { get; set; }
    public Guid? BookerId { get; set; }

    public string? From { get; set; }
    public string? FromDetail { get; set; }
    public string? To { get; set; }
    public string? ToDetail { get; set; }
}

public class ImatisTaskEditDto : ImatisTaskCreateUpdateDto
{
    public Category? Category { get; set; }
    public Patient? Patient { get; set; }
    public Employee? Booker { get; set; }
}
