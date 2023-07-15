import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import useFirebase from '../../assests/useFirebase';

const SignIn = () => {

  const { auth } = useFirebase();
  const [logSign, setLogSign] = useState(true)
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
  }
  return (
    <Container className='container_sign'>
      <Form onSubmit={login}>
        <h1>Log in</h1>
        <Form.Group className="mb-3 form" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>

  )
}

export default SignIn