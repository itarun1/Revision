import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const{id}=useParams()
    const [data,setData]=useState([])
     useEffect(()=>{
    getData()
      },[])
    const getData=()=>{
     axios.get(`http://localhost:8080/Details/${id}`).then((res)=>{
         console.log(res.data)
         setData(res.data)
     })
    }
  return (
    <div>
      {data.name}<br/>
      {data.roll}<br/>
      {data.course}<br/>
      {data.year}<br/>
      {data.status}<br/>
    </div>
  )
}

export default User
