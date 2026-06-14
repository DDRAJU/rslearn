
import React from 'react'
import { useEffect, useState} from 'react'
const APICallData = () => {
   const [users, setUsers] = useState([]);
   
    const apiData=async()=>{
     
      const apiCall=await fetch("http://localhost:8080/api/users/ls");
     const responseData= await apiCall.json();
  setUsers(responseData);
  console.log("Data"+responseData);
  
    }
  useEffect(() => {
    // Your side effect code runs here...
  apiData();
    return () => {
      // Optional cleanup code runs here...
    };
  }, []);
  
    return (
      <div>App
         <ul>
        {users.map(user => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
        
        
        </div>
    )
  }


export default APICallData