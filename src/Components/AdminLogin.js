import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
// import { useHistory } from 'react-router-dom';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const history = useHistory();

  const handleLogin = () => {
    if (email === 'roknasite@gmail.com' && password === '123456') {
      <Link to={'/admin-operations'}/>
    } else {
      alert('Incorrect credentials');
      <Link to={'/'}/>
    }
  };

  return (
    <div className="container">
      <h2>Admin Login</h2>
      <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-primary mt-3" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AdminLogin;
