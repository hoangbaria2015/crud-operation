import { EmployeeDto } from './../shared/models/employee.dto';
import axios, { AxiosResponse } from "axios";
import { BaseService } from './common/base.service';

class EmployeeService extends BaseService<EmployeeDto> {
  
}

export const employeeService = new EmployeeService("https://localhost:7166/api/employee");