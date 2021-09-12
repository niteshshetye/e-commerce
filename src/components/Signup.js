import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'

export default function Login(props) {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleInputs = (e) => {
        setForm({email: 'email@example.com', password: e.target.value})
    }

    const handleSubmit = () => {
        if(form.password){
            // props.history.push('/login')
            
            console.log(props)
        }else{
            alert('Enter the Password')
        }
    }
    return (
        <div className='container'>
            <h1>Signup Page</h1>
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" name='email' value="email@example.com" />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" value={form.password} name='password' onChange={handleInputs} />
                </div>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
