import * as yup from 'yup';

export const bidValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  proposal: yup.string().required(),
  job_id: yup.string().nullable().required(),
  freelancer_id: yup.string().nullable().required(),
});
