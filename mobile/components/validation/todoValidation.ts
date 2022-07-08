import * as Yup from 'yup';

export const TodoValidationSchema = Yup.object().shape({
  title: Yup.string().min(5, 'Too Short!').max(100, 'Too Long!'),
  description: Yup.string().min(10, 'Too Short!').max(200, 'Too Long!'),
  year: Yup.number().min(2022, 'Wrong year').max(2100, 'Wrong year'),
});
