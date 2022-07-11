using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Api.Consts;
using Api.Enums;
using Api.Models.Common;

namespace Api.Models;

public class ImatisTask : BaseEntity
{
    public DateTime CreationTime { get; set; }
    public ImatisTaskStatus Status { get; set; }
    public ImatisTaskPriority Priority { get; set; }
    public Contagion? Contagion { get; set; }

    public Guid? CategoryId { get; set; }
    [ForeignKey("CategoryId")]
    public Category? Category { get; set; }

    public Guid? PatientId { get; set; }
    [ForeignKey("PatientId")]
    public Patient? Patient { get; set; }

    public Guid? BookerId { get; set; }
    [ForeignKey("BookerId")]
    public Employee? Booker { get; set; }
    
    public Guid? AssignToId { get; set; }
    [ForeignKey("AssignToId")]
    public Employee? AssignTo { get; set; }
    
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