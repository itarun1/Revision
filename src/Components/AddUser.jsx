import axios from 'axios'
import React, { useState } from 'react'

const AddUser = () => {
   const [details,setDetails]=useState({
    "name":"",
    "roll":"",
    "course":"",
    "year":"",
    "status":""
   })
const handleSubmit=(e)=>{
    e.preventDefault()
axios.post("http://localhost:8080/Details",details).then(()=>{
    alert("User created succesfully")
    setDetails({
            "name":"",
            "roll":"",
            "course":"",
            "year":"",
            "status":"" 
    })
})
}
const handleChange=(e)=>{

    const {id,value}=e.target
  setDetails({...details ,[id]:value})
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input value={details.name}onChange={handleChange}id='name' type="text"/><br/>
          <label htmlFor='roll'>Roll No:</label>
          <input value={details.roll}onChange={handleChange}id='roll' type="Number"/>
          <br/>
          <label htmlFor='course'>Course:</label>
          <input value={details.course}onChange={handleChange}id='course' type="text"/>
          <br/>
         <label htmlFor="year">Year:</label>
       <select  value={details.year}onChange={handleChange}id="year">
        <option value="">--</option>
        <option value="first">First</option>
        <option value="second">Second</option>
        <option value="third">Third</option>
        <option value="fourth">Fourth</option>
         </select>
          <br/>
         
          <label htmlFor="status">Status:</label>
       <select  value={details.status}onChange={handleChange}id="status">
        <option value="">--</option>
        <option value="pass">Pass</option>
        <option value="fail">Fail</option>
         </select>
         <br/>
         <input type="submit" value="Submit"/>

      </form>
    </div>
  )
}

export default AddUser
