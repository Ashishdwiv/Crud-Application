import { Button, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material"

import { useState,useEffect } from "react"
import { getUsers ,deleteUser} from "../service/api";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const Stable=styled(Table)`
width:90%;
margin:50px auto 0 auto;
`
const Thead=styled(TableRow)
`background:#000;
& > th{
color:#fff;
font-size:20px;
}
`

const TBody=styled(TableRow)
`
& > td{
font-size:20px;
}
`

const AllUsers=()=>
{



const[users,setUsers]=useState([]);
    useEffect(()=>{
        getUserDetails()
    },[])

    const getUserDetails=async ()=>{
        let response= await getUsers();
        setUsers(response.data);
    }
    const deleteUserData=async (id)=>{
        await deleteUser(id);
        getUserDetails();
    
    }
return(
 <Stable>
    <TableHead>
        <Thead>
    <TableCell>Id</TableCell>
    <TableCell>Name</TableCell>
    <TableCell>Username</TableCell>
    <TableCell>Email</TableCell>
   <TableCell>Phone </TableCell>
<TableCell></TableCell>
        </Thead>
   
    </TableHead>
    <TableBody>
       {
        users.map(user=>(
            <TBody>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                <Button variant="contained" style={{marginRight:10}} component={Link} to ={`/edit/${user.id}`}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={()=>deleteUserData(user.id)}>Delete </Button>
                </TableCell>
               
            </TBody>
        )

        )
       }

    </TableBody>
 </Stable>
)
}
export default AllUsers