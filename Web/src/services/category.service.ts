import { CategoryDto } from './../shared/models/category.dto';
import axios, { AxiosResponse } from "axios";
import { BaseService } from './common/base.service';

class CategoryService extends BaseService<CategoryDto> {
  
}

export const categoryService = new CategoryService("https://localhost:7166/api/category");