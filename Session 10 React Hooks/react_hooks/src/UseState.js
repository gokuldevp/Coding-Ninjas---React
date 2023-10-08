import React, {useState } from 'react';

function UseState() { 
  const [email,setEmail] = useState("");

  const [username,setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }


  return (
    <div className="use-state">
      <form>
        <h1>User Form</h1>
        <label htmlFor='email'>Email: </label>
        <input type='text' id='email' name='email' value={email} onChange={handleEmailChange}/>
        <label htmlFor='username'>Name: </label>
        <input type='text' id='username' name='username' value={username} onChange={handleNameChange}/>
      </form>
    </div>
  );
}

export default UseState;
