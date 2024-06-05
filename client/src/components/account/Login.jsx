import { useState } from 'react';

import {Box,TextField,Button, styled,Typography} from '@mui/material';


//styleing a html component = box
const Component = styled(Box)
`
width:400px;
margin:auto;
box-shadow:5px 2px 5px 2px rgb(0 0 0/ 0.7);
`
//styling an object
const Image = styled('img')({
width:100,
margin:"auto",
display:"flex",
padding:"50px 0 0 0"
})

const Wrapper = styled(Box)`
padding:25px 35px;
display:flex;
flex:1;
flex-direction:column;
& > div, & > button, & > p{
    margin-top: 20px;
}
`
const LoginButton = styled(Button)
`
text-transform:none;
background:#FB641B;
color:white;
border-radius:2px;
height:48px;
`

const SignupButton = styled(Button)
`
text-transform:none;
background:white;
color:#2874f0;
border-radius:2px;
height:48px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 0.2);
`

const Typo = styled(Typography)
`
color:#878787;
`

const signUpInitialValues ={
    name:'',
    username:'',
    password:''
}

const Login =()=>{
    const imageUrl ='https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const [account, toggleAccount] = useState('login');
    const [signupValues,setSignupValues] = useState(signUpInitialValues);

    const toggleSignup =()=>{
        account==='login' ? toggleAccount('signup') :toggleAccount('login');
    }
    const onInputChange =(e) =>{
        setSignupValues({...signupValues, [e.target.name]:e.target.value});
    }

    return(
    <Component>
        <Box>
            <Image src={imageUrl} alt="login" />
            {account === 'login' ?
            <Wrapper>
                <TextField variant='standard' label="Enter username"/>
                <TextField variant='standard' label="Enter password"/>
                <LoginButton variant='contained'>Login</LoginButton>
                <Typo style={{textAlign:"center"}}>OR</Typo>
                <SignupButton onClick={()=>toggleSignup()}> Create an Account</SignupButton>
            </Wrapper>
             :
             <Wrapper>
                 <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='name' label="Enter Name"/>
                <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='username' label="Enter username"/>
                <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='password' label="Enter password"/>
                <SignupButton >Signup</SignupButton>
                <Typo style={{textAlign:"center"}}>OR</Typo>
                <LoginButton variant='contained' onClick={()=>{toggleSignup()}}>Already have an account</LoginButton>
            </Wrapper>
             }
        </Box>
    </Component>
    );
}

export default Login;