import React, { useContext,useRef,useState } from 'react'
import loginimg from './favicon.png'
import './Login.css'
import noteContext from '../context/note/noteContext'
import { useNavigate ,Link} from 'react-router-dom'
import './About.css'

const Login = () => {

    const his=()=>{
        if(text==="Alert")
        {

        }
        else{
            history('/')
        }
    }

    const hell=useRef(null);
const [text, settext] = useState(null)
const [descr, setdescr] = useState(null)


    let history=useNavigate();
    const vary=async (cond)=>{

        if(cond===false)
        {
            settext("Alert")
            setdescr("Authentication failed")
            
        
            
        }
        else if(cond===true){
            
            
            settext("Success")
            setdescr("Login successful!!")
            
            // await delay(2000); // Wait for 2 seconds


        }
        hell.current.click();

    }
    const [credentials, setcredentials] = useState({email:"",password:""});
        const ref=useContext(noteContext);
        const login=(evt)=>{
evt.preventDefault();
ref.login(credentials.email,credentials.password,vary);

// alert("Your auth token is : "+localStorage.getItem('token'))

        }
const onchanefunc=(e)=>{
    setcredentials({...credentials,[e.target.name]:e.target.value});
}



  return (

    
    <div  className=" my-2  d-flex align-items-center  justify-content-center about-page1" >



<button ref={hell} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">{text}</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {descr}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={his} data-bs-dismiss="modal">Close</button>
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>





    <form className='my-5' onSubmit={login}>
    <div className='my-2' style={{ textAlign: 'center' }}>
  <h1><img className='img-sr' src={loginimg} alt="" srcSet="" /></h1>
  <h2 className='mx-0'>Sign-in</h2>
</div>
        
  <div className="form-group my-4">
    <label htmlFor="exampleInputEmail1">UserName</label>
    <input onChange={onchanefunc}  value={credentials.email}   className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input  onChange={onchanefunc}  value={credentials.password} type="password" className="form-control" id="password" name="password" placeholder="Password"/>
  </div>
  <div className="form-check my-1">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
  </div>
  <div className="d-flex my-4">
  <Link className="btn btn-primary " to="/signup" role="button">Create Account</Link>

  <button type="submit" className="btn btn-primary  "  style={{marginLeft:"100px"}}>Login</button>
  </div>
</form>
</div>
  )
}

export default Login