using Api.Dtos;
using Api.Models.Common;
using Api.Repositories.Common;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers.Common;

[ApiController]
public class BaseController<TEntity, TCreateUpdateDto, TGetForViewDto, TGetForEditDto, TGetInput> : ControllerBase
    where TEntity : BaseEntity
    where TCreateUpdateDto : BaseCreateUpdateDto
    where TGetForViewDto : BaseDto
    where TGetForEditDto : BaseCreateUpdateDto
    where TGetInput : BaseRequestInputDto
{
    private readonly IRepository<TEntity> _repository;
    private readonly IMapper _mapper;

    protected IRepository<TEntity> Repository => _repository;
    protected IMapper Mapper => _mapper;

    protected BaseController(IRepository<TEntity> repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    [HttpGet]
    public virtual async Task<ActionResult<ICollection<TGetForViewDto>>> GetAll([FromQuery]TGetInput input)
    {
        var entities = await Repository.GetAll();

        var result = Mapper.Map<ICollection<TEntity>, ICollection<TGetForViewDto>>(entities);

        return Ok(result);
    }

    [HttpGet("{id}")]
    public virtual async Task<ActionResult<TGetForEditDto>> GetById(Guid id)
    {
        var entity = await Repository.GetById(id);

        if (entity == null)
            return NotFound("Entity not found");

        var result = Mapper.Map<TEntity, TGetForEditDto>(entity);

        return Ok(result);
    }

    [HttpPost]
    public virtual async Task<ActionResult<TEntity>> Save(TCreateUpdateDto dto)
    {
        if (dto.Id == null || dto.Id == Guid.Empty)
        {
            return await Create(dto);
        }

        return await Update(dto);
    }

    [HttpDelete]
    public virtual async Task<ActionResult> Delete(Guid id)
    {
        var entity = await Repository.GetById(id);

        if (entity == null)
            return NotFound("Entity not found");

        await Repository.Delete(id);

        return Ok();
    }

    protected virtual async Task<ActionResult<TEntity>> Create(TCreateUpdateDto dto)
    {
        var entity = Mapper.Map<TCreateUpdateDto, TEntity>(dto);

        var result = await Repository.Create(entity);

        return Ok(result);
    }

    protected virtual async Task<ActionResult<TEntity>> Update(TCreateUpdateDto dto)
    {
        if (dto.Id == null)
            return NotFound("Entity not found");

        var entity = await Repository.GetById(dto.Id.Value);

        if (entity == null)
            return NotFound("Entity not found");

        Mapper.Map(dto, entity);

        var result = await Repository.Update(entity);
        return Ok(result);
    }
}