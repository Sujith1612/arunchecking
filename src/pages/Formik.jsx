import React from 'react'

function Formik() {
  return (
    <div>
      <label>name</label>
      <input type='text' id='name' name='name'/>
      <br></br>

      <label>Email:</label>
      <input type='Email' id='email' name='email'/>
      <br></br>

      
      <label>channel</label>
      <input type='text' id='channel' name='channel'/>
      <br></br>
      <button>submit</button>
    </div>
  )
}

export default Formik;
