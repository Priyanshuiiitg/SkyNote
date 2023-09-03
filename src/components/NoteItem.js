import React,{useContext} from 'react'
import noteContext from '../context/note/noteContext'

const NoteItem = (props) => {
    const note=useContext(noteContext);

   
    return (
        <div className=' col-md-3'>

            <div className="card my-3" >
                <div className="card-body">
                    <h4>{props.note.tag}</h4>
                    <h5 className="card-title">{props.note.title}</h5>
                    <p className="card-text">{props.note.description}</p>   
                    {/* <i className="fa-regular fa-trash-can mx-2" onClick={(event)=>{let dec=prompt("Type '"+props.note.title+"' to delete....");
                   if(dec===props.note.title){
                    event.preventDefault(); note.deleteNote(props.note._id)}
                    else{
                        alert('You can not delete this');
                        
                    }
                    
                    }}> </i>    */}
                    <i className="fa-regular fa-trash-can mx-2" onClick={(event)=>{event.preventDefault();props.delete(props.note._id)}} > </i>  
                   
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{props.add(props.note)}}></i>       
                </div>
            </div>
        </div>
    )
}

export default NoteItem