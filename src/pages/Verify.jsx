import { useState } from 'react'
import {Container, Form, Button, FormGroup, FormLabel, FormControl} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { UserData } from '../context/UserContext'

const Verify = () => {
  const [otp, setOtp] = useState()
  const {verifyUser} = UserData()
  const navigate = useNavigate()

  const submitHandler = async(e) => {
    e.preventDefault()
    await verifyUser(Number(otp), navigate)
  }
  return (
    <Container className='mt-4'>
    <h2 className='mt-4'>Verify your Account</h2>
    <h5>OTP sent on your email address</h5>
    <Form onSubmit={submitHandler}>
        <FormGroup className='mb-3' controlId="formBasicEmail">
            <FormLabel>OTP</FormLabel>
            <FormControl type='number' placeholder='Enter your OTP' value={otp} onChange={e => setOtp(e.target.value)} required></FormControl>
        </FormGroup>

        <Button type='submit'>Verify</Button> <hr />
        <Link to='/login'>Go to Login Page</Link> <hr />
    </Form>
</Container>
  )
}

export default Verify
