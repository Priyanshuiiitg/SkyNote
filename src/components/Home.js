import React  from 'react'
import Notes from './Notes';
// import AddNote from './AddNote';
import './About.css'
const Home = () => {
  const show=false;
  return (
   
    <div className='container my-3 about-page2'>
       <div className="container my-4">
        

       </div>
       <div className="container">

{/* {
  nts.notes.map((elt,idx)=>(
    <p>{elt.title}</p>
  ))
} */}

{/* {
  nts.notes.map((note)=>{
    return <p>{note.title}</p>
  })
} */}

<Notes/>


       </div>

    </div>
  )
}

export default Home