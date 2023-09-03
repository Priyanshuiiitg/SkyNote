import React, { useContext,useState,useRef } from 'react'
import './Login.css'
import loginimg from './favicon.png'
import noteContext from '../context/note/noteContext'
import { useNavigate } from 'react-router-dom'
import './About.css'
const Signup = () => {
    let history=useNavigate();

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

const vary=async (cond,msg)=>{

    if(cond===false)
    {
        settext("Alert")
        setdescr(msg)
        
    
        
    }
    else if(cond===true){
        
        
        settext("Success")
        setdescr("Account created successfully!!")
        
        // await delay(2000); // Wait for 2 seconds


    }
    hell.current.click();

}
    
    const ref=useContext(noteContext);
    const crtuser=(e)=>{
        e.preventDefault();
        ref.crtUser(credentials.name,credentials.userName,credentials.emailId,credentials.password,vary)

    }
    const [credentials, setcredentials] = useState({name:"",userName:"",emailId:"",password:""})
    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})

    }
    




    return (


        <div className=" about-page1 my-2 d-flex align-items-center  justify-content-center" >





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





            <form className='my-2 mb-3' onSubmit={crtuser} >
            <div className='my-2' style={{ textAlign: 'center' }}>
  <h1><img className='img-sr' src={loginimg} alt="" srcSet="" /></h1>
  <h2 className='mx-0'>Sign-up</h2>
</div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input minLength={5} required onChange={onChange}  value={credentials.name}  type="text" className="form-control" id="name" name="name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="userName">UserName</label>
                    <input minLength={5} required  onChange={onChange}  value={credentials.userName} type="text" className="form-control" id="userName" name="userName" placeholder="Username" />
                </div>
                <div className="form-group my-1">
                    <label htmlFor="emailId">Email address</label>
                    <input minLength={5} required  onChange={onChange}  value={credentials.emailId} className="form-control" type='email' id="emailId" name="emailId" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input minLength={5} required  onChange={onChange}  value={credentials.password} type="password" className="form-control" id="password" name="password" placeholder="Password" />
                </div>
                {/* <div className="form-check my-1">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div> */}
                <button type="submit" className="btn btn-primary my-3">SignUp</button>
            </form>
        </div>
    )
}

export default Signup