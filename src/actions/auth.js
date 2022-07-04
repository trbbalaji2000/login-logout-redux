import axios from "axios";
import { setAlert } from "./alert";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    USER_LOADED,
    AUTH_ERROR
} from'./types';
import SetAuthToken from '../utils/SetAuthToken';

export const loadUser=()=>async(dispatch)=>{
   
if(localStorage.token)
{

    SetAuthToken(localStorage.token)
}
try {
    const res= await axios.get("http://localhost:5000/api/user/auth");

    dispatch({
        type:USER_LOADED,
        payload:res.data
    })
  
} catch (err) {
    console.log(err);
    dispatch({
        type:AUTH_ERROR,
    })
}
}


// Register


export const register=({name,email,password,role})=>async(dispatch)=>{

const config={
    headers:{
        "Content-Type":"application/json",
    },
   
}
const body=JSON.stringify({name,email,password,role});

try {
    
    const res=await axios.post("http://localhost:5000/api/user",body,config);
    dispatch({
        type:REGISTER_SUCCESS,
        payload:res.data,
    });
 dispatch(loadUser());
 console.log(res.data);
} catch ( errors) {
    const err=errors.response.data.msg;
    if(err)
    {
        console.log(err);
        dispatch(setAlert(err,"danger"))
  
    }

   
    dispatch({
        type:REGISTER_FAIL,   
    })
}

}




//Login


export const login=({email,password})=>async(dispatch)=>{

    const config={
        headers:{
            "Content-Type":"application/json",
        },
       
    }
    const body=JSON.stringify({email,password});
    
    try {
        
        const res=await axios.post("http://localhost:5000/api/userlogin",body,config);
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data,
        });
        dispatch(loadUser());
    } catch (error) {
       
        const err=error.response.data.msg;
        if(err)
        {
            console.log(err);
            dispatch(setAlert(err,"danger"))
      
        }
        dispatch({
            type:LOGIN_FAIL,   
        })
    }
    
    }


//Logout

export const logout=()=>(dispatch)=>{
dispatch({
    type:LOGOUT
})
}