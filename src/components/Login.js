import React, {useState} from 'react'

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
            props.history.push('/login')
        }else{
            alert('Enter the Password')
        }
    }
    return (
        <div className='container'>
            <h1>Login Page</h1>
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control-plaintext" name='email' />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" value={form.password} name='password' onChange={handleInputs} />
                </div>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}
