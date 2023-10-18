import { JobInterface } from 'interfaces/job';
import { FreelancerInterface } from 'interfaces/freelancer';
import { GetQueryInterface } from 'interfaces';

export interface BidInterface {
  id?: string;
  amount: number;
  proposal: string;
  job_id: string;
  freelancer_id: string;
  created_at?: any;
  updated_at?: any;

  job?: JobInterface;
  freelancer?: FreelancerInterface;
  _count?: {};
}

export interface BidGetQueryInterface extends GetQueryInterface {
  id?: string;
  proposal?: string;
  job_id?: string;
  freelancer_id?: string;
}
