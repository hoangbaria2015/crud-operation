import axios, { AxiosResponse } from "axios";

export class BaseService<TDto> {
  
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getAll = async (): Promise<TDto[]> => {
    try {
      const response: AxiosResponse<TDto[]> = await axios.get(this.baseUrl);

      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  save = async (task: TDto): Promise<TDto> => {
    try {
      const savedTask: AxiosResponse<TDto> = await axios.post(this.baseUrl, task);

      return savedTask.data;
    } catch (error) {
      console.log(error);
      return {} as TDto;
    }
  };

  delete = async (id: string): Promise<void> => {
    try {
      await axios.delete(`${this.baseUrl}/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
}