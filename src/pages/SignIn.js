import { useState } from 'react'
import './signin.css'
import { useDispatch } from 'react-redux'
import { signIn } from '../redux/slices/userSlice'

function SignIn() {

  const [fname, setfName] = useState('')
  const [lname, setlName] = useState('')
  const [email, setEmail] = useState('')
  const [ph, setph] = useState('')
  const dispatch = useDispatch()

  const signin = e => {
    e.preventDefault()
    dispatch(signIn({ fname, lname, email, ph }))
  }

  return (
    <div className='center'>
      <div className='signin'>
        <h1>Sign In</h1>
        <form onSubmit={signin} name='signin_form'>
          <input
            type='text'
            value={fname}
            required
            placeholder="Enter your firstname"
            onChange={e => setfName(e.target.value)} />
          <input
            type='text'
            value={lname}
            required
            placeholder="Enter your lastname"
            onChange={e => setlName(e.target.value)} />
          <input
            type='email'
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)} />

          <input
            type='tel'
            value={ph}
            required
            placeholder="Enter your phonenumber"
            onChange={e => setph(e.target.value)} />

          <button type='submit'>Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn