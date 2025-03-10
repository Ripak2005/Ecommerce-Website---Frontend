import { useState } from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { UserData } from '../context/UserContext'

const Register = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const {registerUser} = UserData()
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        await registerUser(name, email, password, navigate)
    }
  return (
    <div>
        <Container className='mt-4'>
            <h2 className='mt-4'>Looks like you're new here!</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group className='mb-3' controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter your name' value={name} onChange={e => setName(e.target.value)} required></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3' controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='example@example.com' value={email} onChange={e => setEmail(e.target.value)} required></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3' controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter your password' value={password} onChange={e => setPassword(e.target.value)} required></Form.Control>
                </Form.Group>

                <Button type='submit'>Register</Button> <br></br>
                <Link to='/login'>Have an account</Link>
            </Form>
        </Container>
    </div>
  )
}

export default Register
