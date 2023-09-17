import { useState } from "react";
import { FormGroup ,FormControl,InputLabel,Input,Typography,Button,styled} from "@mui/material";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";
   const Conatiner=styled(FormGroup)`
   width:50%;
   margin: 5% auto 0 auto;
   &>div{
    margin-top:20px;
   }
   `

   
const initialValues=
    {
        name:"",
        username:"",
        email:"",
        phone:"",


    }


const AddUser=()=>{
const[user,setUser]=useState(initialValues)

const navigate=useNavigate();
const oneValueChange=(e)=>{
  setUser({...user,[e.target.name]: e.target.value})
  console.log(user)
}

const addUserDetails=async ()=>{
await addUser(user);
navigate('/all');
}
    return(
<Conatiner>
<Typography variant="h4">ADD USER</Typography>
    <FormControl>
       
        <InputLabel> Name </InputLabel>
        <Input onChange={(e)=>oneValueChange(e)} name="name"/>
        </FormControl>
        <FormControl>
        <InputLabel>  Username</InputLabel>
        <Input onChange={(e)=>oneValueChange(e)} name="username"/>
        </FormControl>
        <FormControl>
        <InputLabel>  Email</InputLabel>
        <Input  onChange={(e)=>oneValueChange(e)} name="email"/>
        </FormControl>
        <FormControl>
        <InputLabel>  Phone  </InputLabel>
        <Input  onChange={(e)=>oneValueChange(e)} name="phone"/>
        </FormControl>
        <FormControl>
            <Button onClick={()=>addUserDetails()} variant="contained" >ADD USer</Button>
        </FormControl>
</Conatiner>
   
    )
}
export default AddUser;