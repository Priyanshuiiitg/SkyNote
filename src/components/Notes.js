import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/note/noteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
  const [show, setshow] = useState(false)


  const history=useNavigate();
  const [text, settext] = useState("")
  const [descr, setdescr] = useState("")
  const [id, setid] = useState(null)

  const hell = useRef(null)
  const refClose = useRef(null)

  const add = useRef(null);
  const ref = useContext(noteContext);

  const [inputvalue, setinputvalue] = useState({etitle:"",edescription:"",etag:""})
  const onChange=(evt)=>{
      setinputvalue({...inputvalue,[evt.target.name]:evt.target.value})
  
  
  }

  const upd=(evt)=>{
    ref.updateNote(id,inputvalue.etitle,inputvalue.edescription,inputvalue.etag);
    settext("Success")
    setdescr("Note updated successfully!!")
    hell.current.click();
    
refClose.current.click();
   
  }
  const addbtn=(note)=>{
    setid(note._id);
    add.current.click();
    setinputvalue({etitle:note.title,edescription:note.description,etag:note.tag});
  }


  useEffect((evt) => {

    if(localStorage.getItem('token'))
 {   
  
   setshow(true);
    ref.fetchingNotes();
 
  

}


      else
      {


        history('/login')
      }
// eslint-disable-next-line
  }, [])
  const del = (id) => {
    settext("Delete")
    setdescr("Your note is deleted successfully!!");
    ref.deleteNote(id);
    hell.current.click();


  }
  const success=()=>{
    settext("Success")
    setdescr("Your note is added successfully!!");
    hell.current.click();
  }

  

  return (
    
    <div className='row my-3'>
{show && (<>

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
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>



      <button ref={add} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModalCenter1">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModalCenter1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Edit your note!!</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className='my-2'>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Title</label>
                  <input value={inputvalue.etitle}  onChange={onChange} type="text" className="form-control" name="etitle" id="etitle" aria-describedby="emailHelp" placeholder="Enter title" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Description</label>
                  <input value={inputvalue.edescription}  onChange={onChange} type="text" className="form-control" name="edescription" id="edescription" placeholder="Enter description" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Tag</label>
                  <input value={inputvalue.etag} onChange={onChange} type="text" className="form-control" id="etag" name="etag" placeholder="#general" />
                </div>

                
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={upd}>Update note</button>
            </div>
          </div>
        </div>
      </div>
      <h2>Add Your Notes</h2>

      <AddNote func={success} />
      <div className="container">
        <h2>Your Notes</h2>
      {ref.notes.length===0 && "No notes to display!!"}
      </div>
     

      {
        ref.notes.map((elt, idx) => {
          return <NoteItem key={idx} add={addbtn} delete={del} note={elt} />
        })
      }
</>)}
    </div>
  )
}

export default Notes