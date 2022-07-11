using Api.Enums;
using Api.Models;

namespace Api.Dtos.ImatisTaskDtos;

public class ImatisTaskDto : BaseDto
{
    public DateTime CreationTime { get; set; }
    public ImatisTaskStatus Status { get; set; }
    public ImatisTaskPriority Priority { get; set; }
    public Contagion? Contagion { get; set; }

    public Guid? CategoryId { get; set; }
    public Category? Category { get; set; }

    public Guid? PatientId { get; set; }
    public Patient? Patient { get; set; }

    public Guid? BookerId { get; set; }
    public Employee? Booker { get; set; }
    
    public Guid? AssignToId { get; set; }
    public Employee? AssignTo { get; set; }
    
    public string? Description { get; set; }
    public string? Instruction { get; set; }
    public string? From { get; set; }
    public string? FromDetail { get; set; }
    public string? To { get; set; }
    public string? ToDetail { get; set; }
}

public class ImatisTaskViewDto : ImatisTaskDto
{
    public bool IsAssigned => AssignToId != null;
}