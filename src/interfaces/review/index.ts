import { JobInterface } from 'interfaces/job';
import { FreelancerInterface } from 'interfaces/freelancer';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  rating: number;
  comment: string;
  job_id: string;
  freelancer_id: string;
  created_at?: any;
  updated_at?: any;

  job?: JobInterface;
  freelancer?: FreelancerInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  job_id?: string;
  freelancer_id?: string;
}
