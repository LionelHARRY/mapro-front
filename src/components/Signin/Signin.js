import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

async function signinUser(credentials){
    return fetch('http://192.168.1.12:8080/api/signin', 
    {method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(data => data.json())
}

const Signin = ({setToken}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await signinUser({email, password});
        setToken(token);
    }
    return (
        <div className="bg-image d-flex align-items-center" id="log-page">
            <div className="col-3 mx-auto text-center shadow p-3 rounded" id="signin">
                <form onSubmit={handleSubmit}>
                    <h1>mapro</h1>
                    <p>Signin to access data</p>
                    <input type="email" className="form-control mt-5" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    <input type="password" className="form-control mt-5" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    <Button className="mt-5" type="submit">Sign in</Button>
                    <p className="mt-5">Sign up</p>
                </form>
            </div>
        </div>
    )
}

Signin.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Signin
