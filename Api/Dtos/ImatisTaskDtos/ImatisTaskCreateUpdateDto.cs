using System.ComponentModel.DataAnnotations;
using Api.Consts;
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

    [MaxLength(TaskConsts.DescriptionMaxLength)]
    public string? Description { get; set; }
    
    [MaxLength(TaskConsts.InstructionMaxLength)]
    public string? Instruction { get; set; }
    
    [MaxLength(TaskConsts.FromMaxLength)]
    public string? From { get; set; }
    
    [MaxLength(TaskConsts.FromDetailMaxLength)]
    public string? FromDetail { get; set; }
    
    [MaxLength(TaskConsts.ToMaxLength)]
    public string? To { get; set; }
    
    [MaxLength(TaskConsts.ToDetailMaxLength)]
    public string? ToDetail { get; set; }
}

public class ImatisTaskEditDto : ImatisTaskCreateUpdateDto
{
    public Category? Category { get; set; }
    public Patient? Patient { get; set; }
    public Employee? Booker { get; set; }
}
