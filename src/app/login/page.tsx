"use client";
import { useFormik } from "formik";
import {
  Container,
  Typography,
  Paper,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { login } from "@/lib/reduxStore/authSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { storeDispatch } from '@/lib/reduxStore/dataStore'; 

export default function Login() {
  
  let router = useRouter();
  let dispatch = useDispatch<storeDispatch>();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values: {email:string, password:string}) => {

      dispatch(login(values)).then((res: any)=>{
        if(res.payload.data.message === "success"){
          toast.success('successfully logged in');  
          localStorage.setItem('loggedinToken', res.payload.data.token);
          router.push('/');
        }else{
          toast.error('invalid email or password');
        }
        
      }).catch((err: any)=> {
        console.log(err);
        
      }); 
    },
  });

  return (
    <>
      <Container sx={{ py: 5, color: "#09c" }} maxWidth="sm">
        <Typography component="h3" variant="h4">
          Login Form
        </Typography>
        <Paper elevation={20} sx={{ mt: 5, p: 5 }}>
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                sx={{ width: "100%", my: 2 }}
                id="email"
                name="email"
                label="Email"
                placeholder="Enter your email"
                variant="outlined"
              ></TextField>
            </Box>
            <Box>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                sx={{ width: "100%", my: 2 }}
                id="password"
                name="password"
                label="password"
                placeholder="Enter your password"
                variant="outlined"
              ></TextField>
            </Box>
            <Button
              sx={{ width: "100%", my: 1 }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
}
