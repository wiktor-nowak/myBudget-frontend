import React, { useEffect, useState } from 'react'
import './ExternalStyles.css'
import { Link } from 'react-router-dom'

const RegisterPage = () => {

  const [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        [passwordConfirm, setPasswordConfirm] = useState(""),
        [passwordMatch, setPasswordMatch] = useState(false),
        [username, setUsername] = useState("")


  const someFunction = (e) => {
    e.preventDefault();
    console.log('...login!!!...')
  }

  useEffect(() => {
    password === passwordConfirm ? setPasswordMatch(true): setPasswordMatch(false)
  }, [password, passwordConfirm])

  return (
    <section className='login-card'>
      <span className='login-card__header'>Register form</span>
      <form className='login-card__form'
        onSubmit={e => someFunction(e)}
      >
        <label
            className='login-card__form__label'
            htmlFor='username'
        >
          User Name
        </label>
        <input
            autoComplete='off'
            className='login-card__form__input'
            name='username'
            onChange={e => setUsername(e.target.value)}
            placeholder='username...'
            value={username}
        />
        <label
            className='login-card__form__label'
            htmlFor='email'
        >
          E-mail
        </label>
        <input
            autoComplete='off'
            className='login-card__form__input'
            name='email'
            onChange={e => setEmail(e.target.value)}
            placeholder='e-mail...'
            value={email}
        />
        <label
            className='login-card__form__label'
            htmlFor='password'
        >
          Password
        </label>
        <input
            autoComplete='off'
            className='login-card__form__input'
            name='password'
            onChange={e => setPassword(e.target.value)}
            placeholder='password...'
            required
            type="password"
            value={password}
        />
        <label
            className='login-card__form__label'
            htmlFor='confirmpassword'
        >
          Confirm Password
        </label>
        <input
            autoComplete='off'
            className='login-card__form__input'
            name='confirmpassword'
            onChange={e => setPasswordConfirm(e.target.value)}
            placeholder='password...'
            required
            type="password"
            value={passwordConfirm}
        />
        <button
            className='button'
            type='submit'
            disabled={username && password && passwordMatch ? false : true}
        >
          REGISTER
        </button>
        <Link
            className='register-redirect'
            to='/login'
        >
          Already have account?
        </Link>
      </form>
    </section>
  )
}

export default RegisterPage
