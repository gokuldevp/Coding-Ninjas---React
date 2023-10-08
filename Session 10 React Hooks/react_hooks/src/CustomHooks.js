import React, { useState} from 'react';

function useFormInput(initialValue) { 
    // Custom Hook for userFormInput
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange,
    };
}

function SignUpform() {
    const email = useFormInput("")
    const name = useFormInput("")
    const password = useFormInput("")

  return (
    <div>
        <label htmlFor='email'>Email: </label>
        <input id='email' className='email' name='email' {... email}/>
        <label htmlFor='name'>Name:</label>
        <input id='name' className='name' name='name' {... name}/>
        <label htmlFor='name'>Password:</label>
        <input type='password' id='password' className='password' name='password' {... password}/>

        <ul>
            <li>Email: {email.value}</li>
            <li>Name: {name.value}</li>
            <li>Password: {password.value}</li>
        </ul>
    </div>
  );
}

export default SignUpform;
