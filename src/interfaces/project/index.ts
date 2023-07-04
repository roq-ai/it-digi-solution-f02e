import { TaskInterface } from 'interfaces/task';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  description?: string;
  company_id?: string;
  manager_id?: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    task?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
  manager_id?: string;
}
