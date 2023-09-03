import React, { useContext,useState } from 'react'
import noteContext from '../context/note/noteContext';

const AddNote = (props) => {
    const ref=useContext(noteContext)
    
    const submitClick=(evt)=>{
        evt.preventDefault();
        const {title,description,tag}=inputvalue;
        ref.addNote(title,description,tag);
        setinputvalue({title:"",description:"",tag:""});
        props.func();
        

    }
const [inputvalue, setinputvalue] = useState({title:"",description:"",tag:""})
const onChange=(evt)=>{
    setinputvalue({...inputvalue,[evt.target.name]:evt.target.value})


}

  return (
    <form className='my-2'>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Title</label>
    <input onChange={onChange} type="text" className="form-control" value={inputvalue.title} name="title" id="title" aria-describedby="emailHelp" placeholder="Enter title" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Description</label>
    <input onChange={onChange} type="text" className="form-control" value={inputvalue.description} name="description" id="description" placeholder="Enter description" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Tag</label>
    <input onChange={onChange} type="text" className="form-control" value={inputvalue.tag} id="tag" name="tag" placeholder="#general" />
  </div>
  
  <button type="submit" className="btn btn-primary my-3" onClick={submitClick}>Submit</button>
</form>

  )
}

export default AddNote