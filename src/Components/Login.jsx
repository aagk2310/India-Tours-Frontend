import { Navigate, useNavigate } from 'react-router-dom';
import Button from './Button';
import style from './Login.module.css';
import NavButton from './NavButton';
import { useEffect, useState } from 'react';
import useLogin from '../services/login';
import AlertMessage from './AlertMessage';
import { useForm } from 'react-hook-form';

import { ButtonPrimary } from '../StyledComponents/ButtonComponent';
import Heading from '../StyledComponents/HeadingText';
import DivWithContentCentered from '../StyledComponents/DivWithContentCentered';
import DivWithEqualSpace from '../StyledComponents/DivWithEqualSpace';
import FormComponent from '../StyledComponents/FormComponent';
import FormInputComponent from '../StyledComponents/FormInputComponent';
import LoginForm from './LoginForm.jsx';
import { isAuthenticated } from '../services/jwtCookie.js';

function Login() {
  const navigate = useNavigate();
  const { isPending, isSuccess, error, mutate, data } = useLogin();
  const [showAlert, setShowAlert] = useState(null);
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/dashboard');
    }
  }, []);

  useEffect(() => {
    if (show && !isPending) {
      if (!isSuccess) {
        setShowAlert({
          isSuccess: false,
          message: error ? error.message : 'Something went wrong',
        });
      } else {
        console.log(`Login succesful`);
        setShowAlert({
          isSuccess: true,
          message: 'Login Succesful',
        });
        navigate('/dashboard');
      }
    }
  }, [isSuccess, isPending, show, error]);
  function onSubmit(data) {
    mutate(data);
    setShow(true);
  }

  return (
    <>
      <div className={style.main}>
        <DivWithEqualSpace
          width='55%'
          height='90%'
          backgroundColor='#fff'
          padding='1.5rem 2.5rem'
          borderRadius='5px'
        >
          <DivWithContentCentered>
            <Heading>
              <h1>Log into your account</h1>
            </Heading>
          </DivWithContentCentered>
          <LoginForm
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            isPending={isPending}
          />
        </DivWithEqualSpace>
      </div>
      {!isPending && showAlert ? (
        <AlertMessage status={showAlert} setShow={() => setShowAlert(null)} />
      ) : (
        false
      )}
    </>
  );
}

export default Login;
