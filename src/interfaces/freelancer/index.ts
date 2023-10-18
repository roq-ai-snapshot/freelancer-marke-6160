import { BidInterface } from 'interfaces/bid';
import { ReviewInterface } from 'interfaces/review';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FreelancerInterface {
  id?: string;
  skills: string;
  experience: number;
  hourly_rate?: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  bid?: BidInterface[];
  review?: ReviewInterface[];
  user?: UserInterface;
  _count?: {
    bid?: number;
    review?: number;
  };
}

export interface FreelancerGetQueryInterface extends GetQueryInterface {
  id?: string;
  skills?: string;
  user_id?: string;
}
