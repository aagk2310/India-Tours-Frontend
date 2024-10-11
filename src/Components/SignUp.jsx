import { useForm } from 'react-hook-form';
import Button from './Button';
import style from './Signup.module.css';
import ErrorMessage from './ErrorMessage';
import useSignUp from '../services/signup';
import { useEffect, useState } from 'react';

import CircularSpinner from './CircularSpinner';
import AlertMessage from './AlertMessage';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const { register, handleSubmit, getValues, formState } = useForm();
  const { errors } = formState;
  const { mutate, error, isPending, isSuccess } = useSignUp();
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (show && !isPending) {
      if (!isSuccess) {
        setShowAlert({
          isSuccess: false,
          message: error ? error.message : 'Something went wrong',
        });
      } else {
        setShowAlert({
          isSuccess: true,
          message: 'Account created successfully',
        });
        const timer = setTimeout(() => {
          navigate('/login');
        }, 5000);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timer);
      }
    }
  }, [show, isPending, isSuccess, error]);

  return (
    <>
      <main className={style.main}>
        <div className={style.signupForm}>
          <h2 className={style.headingSecondary}>Sign Up</h2>
          <form
            className={style.form}
            onSubmit={handleSubmit((data) => {
              console.log(isSuccess);
              mutate(data);
              setShow(true);
            })}
          >
            <div className={style.container}>
              <div className={style.formGroup}>
                <label className={style.formLabel} htmlFor='name'>
                  Name
                </label>
                <input
                  className={style.formInput}
                  id='name'
                  placeholder='Your Name'
                  required
                  {...register('name')}
                />
              </div>
              <div className={style.formGroup}>
                <label className={style.formLabel} htmlFor='email'>
                  Email address
                </label>
                <input
                  className={style.formInput}
                  id='email'
                  type='email'
                  placeholder='you@example.com'
                  required
                  {...register('email')}
                />
              </div>
              <div className={style.formGroup}>
                <label className={style.formLabel} htmlFor='password'>
                  Password
                </label>
                <input
                  className={style.formInput}
                  id='password'
                  type='password'
                  placeholder='••••••••'
                  required
                  {...register('password', {
                    minLength: 8,
                  })}
                />
                {errors?.password ? (
                  <ErrorMessage
                    error={'Password must be at least 8 characters'}
                  />
                ) : (
                  false
                )}
              </div>
              <div className={style.formGroup}>
                <label className={style.formLabel} htmlFor='confirmPassword'>
                  Confirm Password
                </label>
                <input
                  className={style.formInput}
                  id='confirmPassword'
                  type='password'
                  placeholder='••••••••'
                  required
                  {...register('confirmPassword', {
                    validate: (value) =>
                      value === getValues().password
                        ? true
                        : "Passwords don't match",
                  })}
                />
                {errors?.confirmPassword?.message ? (
                  <ErrorMessage error={errors.confirmPassword.message} />
                ) : (
                  false
                )}
              </div>
            </div>
            <div>
              <Button>{!isPending ? 'Register' : <CircularSpinner />}</Button>
            </div>
          </form>
        </div>
      </main>
      {showAlert ? (
        <AlertMessage status={showAlert} setShow={setShow} />
      ) : (
        false
      )}
    </>
  );
}

export default SignUp;
