import React, { useState } from 'react'
import './ExternalStyles.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {

  const [email, setEmail] = useState(""),
        [password, setPassword] = useState("")
        // navigate = useNavigate()

  const someFunction = (e) => {
    e.preventDefault();
    console.log('...login!!!...')
  }

  return (
    <section className='login-card'>
      <span className='login-card__header'>Login to Application</span>
      <form className='login-card__form'
        autocomplete='off'
        onSubmit={e => someFunction(e)}
      >
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
            autocomplete='off'
            className='login-card__form__input'
            name='password'
            onChange={e => setPassword(e.target.value)}
            placeholder='password...'
            required
            type="password"
            value={password}
        />
        <button
            className='button'
            type='submit'
            disabled={email && password ? false : true}
        >
          LOGIN
        </button>
        <Link
            className='register-redirect'
            to='/register'
        >
          Do not have account?
        </Link>
      </form>
    </section>
  )
}

export default LoginPage
