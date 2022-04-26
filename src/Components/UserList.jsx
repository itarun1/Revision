import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const UserList = () => {
    const navigate=useNavigate()
    const [user,setUser]=useState([])
    useEffect(()=>{
        getUser()
    },[])

    const getUser=()=>{
      axios.get(" http://localhost:8080/Details").then((res)=>{
        console.log(res.data)
        setUser(res.data)
      })
    }
  return (
    <div>
      {
          user.map((e)=>{
           return<div onClick={()=>{
               navigate(`/userlist/${e.id}`)
           }}>{e.id}.{e.name}<br/></div>
          })
      }
    </div>
  )
}

export default UserList
