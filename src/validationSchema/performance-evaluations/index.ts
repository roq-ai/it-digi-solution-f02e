import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  evaluation: yup.string().required(),
  company_id: yup.string().nullable(),
});
