import { BaseDto, CategoryDto, EmployeeDto, PatientDto } from ".";
import { Contagion, ImatisTaskPriority, ImatisTaskStatus } from "../enums";


export interface ImatisTaskDto extends BaseDto {
    creationTime?: string;
    status?: ImatisTaskStatus;
    priority?: ImatisTaskPriority;
    contagion?: Contagion;
    categoryId?: string;
    category?: CategoryDto;
    patientId?: string;
    patient?: PatientDto;
    bookerId?: string;
    booker?: EmployeeDto;
    assignToId?: string;
    assignTo?: EmployeeDto;
    from?: string;
    fromDetail?: string;
    to?: string;
    toDetail?: string;
    description?: string;
    instruction?: string;
}