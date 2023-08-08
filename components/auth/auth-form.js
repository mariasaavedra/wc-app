import { useState, useRef } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';

import classes from './auth-form.module.css';

async function createUser(email, password, role) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password, role }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const roleInputRef = useRef('');

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredRole = roleInputRef.current.value;
  
    // optional: Add validation

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      if (!result.error) {
        // set some auth state
        router.replace('/profile');
      }
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword, enteredRole);
        console.log(result);
        const resultLogin = await signIn('credentials', {
          redirect: false,
          email: enteredEmail,
          password: enteredPassword,
        })
        if(!resultLogin.error) {
          router.replace("/profile");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input
            placeholder='EMAIL' 
            type='email' 
            id='email' 
            required 
            ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            placeholder='PASSWORD'
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        {isLogin ? '' :
                <div className={classes.control}>
                  <label htmlFor='role'>Account Role</label>
                  <select name='role' id='role'ref={roleInputRef}>
                    <option value=''>Select Account Role</option>
                    <option value='par'>Parent</option>
                    <option value='stu'>Student</option>
                    <option value='vol'>Volunteer</option>
                  </select>
              </div>
        }
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
