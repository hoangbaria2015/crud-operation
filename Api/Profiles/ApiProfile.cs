using Api.Dtos;
using Api.Dtos.CategoryDtos;
using Api.Dtos.EmployeeDtos;
using Api.Dtos.ImatisTaskDtos;
using Api.Dtos.PatientDtos;
using Api.Models;
using AutoMapper;

namespace Api.Profiles;

public class ApiProfile : Profile
{
    public ApiProfile()
    {
        CreateMap<Category, CategoryViewDto>(MemberList.None);
        CreateMap<Category, CategoryEditDto>(MemberList.None);
        CreateMap<CategoryCreateUpdateDto, Category>(MemberList.None);

        CreateMap<Employee, EmployeeViewDto>(MemberList.None);
        CreateMap<Employee, EmployeeEditDto>(MemberList.None);
        CreateMap<EmployeeCreateUpdateDto, Employee>(MemberList.None);

        CreateMap<Patient, PatientViewDto>(MemberList.None);
        CreateMap<Patient, PatientEditDto>(MemberList.None);
        CreateMap<PatientCreateUpdateDto, Patient>(MemberList.None);
        
        CreateMap<ImatisTask, ImatisTaskViewDto>(MemberList.None);
        CreateMap<ImatisTask, ImatisTaskEditDto>(MemberList.None);
        CreateMap<ImatisTaskCreateUpdateDto, ImatisTask>(MemberList.None);
    }
}