import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
useEffect(()=>{
    if(localStorage.getItem('user')){
        navigate('/add');
    }
})

  async function signUp(e) {
    e.preventDefault(); // Prevent default form submission behavior

    let item = { name, password, email };
    console.warn(item);

    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(item)
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem('user', JSON.stringify(result));
        navigate('/add');
      } else {
        console.error('Error during registration:', response.statusText);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  }

  return (
    <div>
      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
        <br />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
        <br />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        <br />
        <button onClick={(e) => signUp(e)}>Sign up</button>
      </form>
    </div>
  );
};

export default Register;
