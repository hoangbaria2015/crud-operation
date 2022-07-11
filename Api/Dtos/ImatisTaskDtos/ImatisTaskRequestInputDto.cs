namespace Api.Dtos.ImatisTaskDtos;

public class ImatisTaskRequestInputDto : BaseRequestInputDto
{
    public bool? IsAssigned { get; set; }

    public ICollection<Guid>? CategoryIds { get; set; }
}