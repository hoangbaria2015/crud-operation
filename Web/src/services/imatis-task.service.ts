import { ImatisTaskDto } from '../shared/models/index';
import axios, { AxiosResponse } from "axios";
import { BaseService } from './common/base.service';

class ImatisTaskService extends BaseService<ImatisTaskDto> {
  
}

export const imatisTaskService = new ImatisTaskService("https://localhost:7166/api/imatis-task");