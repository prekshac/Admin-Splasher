import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Container, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const url = 'http://localhost:5000';

  const [showPassword, setShowPassword] = useState(false);

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      console.log(values);
      const response = await fetch(`${url}/user/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      console.log(response.status);
      if(response.status === 200){

        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You will be redirected to the dashboard',
        });
        const data = await response.json();
        console.log(data);
        sessionStorage.setItem('user', JSON.stringify(data.result));
        navigate('/dashboard/app');
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Please check your credentials',
        });
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={loginForm.handleSubmit}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Stack spacing={3}>
            <TextField
              name="email"
              label="Email address"
              onChange={loginForm.handleChange}
              value={loginForm.values.email}
            />

            <TextField
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              onChange={loginForm.handleChange}
              value={loginForm.values.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            <Checkbox name="remember" label="Remember me" />
            <Link variant="subtitle2" underline="hover">
              Forgot password?
            </Link>
          </Stack>

          <LoadingButton fullWidth size="large" type="submit" variant="contained">
            Login
          </LoadingButton>
        </Box>
      </form>
    </Container>
  );
}
