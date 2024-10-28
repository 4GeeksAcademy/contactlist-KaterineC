import React from "react";




export const CreateContact = () =>{
    return(
        <div>
 <div className="mb-3">
    <label className="form-label">Full Name</label>
    <input type="email" className="form-control" placeholder= "FullName"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label className="form-label">Email</label>
    <input type="email" className="form-control" placeholder= "Email"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label className="form-label">Phone</label>
    <input type="email" className="form-control" placeholder= "Phone"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label className="form-label">Address</label>
    <input type="email" className="form-control" placeholder= "Email"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>


  
  <button type="submit" className="btn btn-primary">Submit</button>
</div>
    )
} 