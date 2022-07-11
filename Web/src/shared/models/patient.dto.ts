import { BaseDto } from ".";

export interface PatientDto extends BaseDto {
  name?: string;
  socialSecurityNumber?: string;
}