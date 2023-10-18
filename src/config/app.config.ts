interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Admin', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Freelancer Marketplace',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own freelancer profile',
    'Create bids on jobs',
    'Read job postings',
    'Read and write reviews',
  ],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage jobs', 'Manage freelancers'],
  getQuoteUrl: 'https://app.roq.ai/proposal/df299f02-0cab-4cd9-84a5-4072b83aa92f',
};
