import * as yup from 'yup';

export const freelancerValidationSchema = yup.object().shape({
  skills: yup.string().required(),
  experience: yup.number().integer().required(),
  hourly_rate: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
