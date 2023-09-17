import { useState,useEffect } from "react";
import { FormGroup ,FormControl,InputLabel,Input,Typography,Button,styled} from "@mui/material";
import { getUser,editUser } from "../service/api";
import { useNavigate ,useParams} from "react-router-dom";
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


const EditUser=()=>{
const[user,setUser]=useState(initialValues)

const navigate=useNavigate();
const{id}=useParams();

useEffect(()=>{
    getUserData();

},[])

const getUserData=async()=>{
    let response=await getUser(id);
   setUser(response.data);
}

const oneValueChange=(e)=>{
  setUser({...user,[e.target.name]: e.target.value})
  console.log(user)
}

const addUserDetails=async ()=>{
await editUser(user,id);
navigate('/all');
}
    return(
<Conatiner>
<Typography variant="h4">EDIT USER</Typography>
    <FormControl>
       
        <InputLabel> Name </InputLabel>
        <Input onChange={(e)=>oneValueChange(e)} name="name" value={user.name}/>
        </FormControl>
        <FormControl>
        <InputLabel>  Username</InputLabel>
        <Input onChange={(e)=>oneValueChange(e)} name="username" value={user.username}/>
        </FormControl>
        <FormControl>
        <InputLabel>  Email</InputLabel>
        <Input  onChange={(e)=>oneValueChange(e)} name="email" value={user.email}/>
        </FormControl>
        <FormControl>
        <InputLabel>  Phone  </InputLabel>
        <Input  onChange={(e)=>oneValueChange(e)} name="phone" value={user.phone}/>
        </FormControl>
        <FormControl>
            <Button onClick={()=>addUserDetails()} variant="contained" >Edit USer</Button>
        </FormControl>
</Conatiner>
   
    )
}
export default EditUser;