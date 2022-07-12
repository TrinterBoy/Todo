import * as Yup from 'yup';

export const AuthValidationSchema = Yup.object().shape({
  email: Yup.string().email('Bad email'),
  password: Yup.string().min(8, 'Too Short!').max(40, 'Too Long!'),
});

