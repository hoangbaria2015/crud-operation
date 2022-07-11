import { BaseDto } from ".";


export interface EmployeeDto extends BaseDto {
  name?: string;
  phoneNumber?: string;
}