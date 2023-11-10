import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom"

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();
  const { createUser, user } = UserAuth();
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createUser(email, password, displayName)
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  useEffect(() => {
    if (user != null) {
      Navigate('/')
      window.location.reload()
    }
  }, [user, Navigate])

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
        }}
      >
        <h1>Register</h1>
        <Typography>you already have a accout yet ? click here to <Link to='/loginpage'>Login Now</Link></Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            onChange={(e) => setDisplayName(e.target.value)}
            margin="normal"
            required
            fullWidth
            name="displayName"
            label="Display Name"
            type="text"
            id="displayName"
            autoComplete="off"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </form>
      </Box>
    </Container>
  )
}