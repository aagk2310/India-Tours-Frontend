import { ButtonPrimary } from '../StyledComponents/ButtonComponent';
import FormComponent from '../StyledComponents/FormComponent';
import FormInputComponent from '../StyledComponents/FormInputComponent';
import style from './Login.module.css';
import CircularSpinner from './CircularSpinner';

function LoginForm({ handleSubmit, register, isPending, onSubmit }) {
  return (
    <FormComponent
      height='60%'
      width='100%'
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <div className={style.formGroup}>
        <label className={style.formLabel} htmlFor='email'>
          Email address
        </label>
        <FormInputComponent
          id='email'
          type='email'
          placeholder='you@example.com'
          required='required'
          {...register('email')}
        />
      </div>
      <div className={style.formGroup}>
        <label className={style.formLabel} htmlFor='password'>
          Password
        </label>
        <FormInputComponent
          className={style.formInput}
          id='password'
          type='password'
          placeholder='••••••••'
          required='required'
          minLength={8}
          {...register('password')}
        />
      </div>
      <div className={style.formGroup}>
        <ButtonPrimary>
          {!isPending ? 'Log In' : <CircularSpinner />}
        </ButtonPrimary>
      </div>
    </FormComponent>
  );
}

export default LoginForm;
