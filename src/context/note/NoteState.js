import { useState } from 'react';
import NoteContext from './noteContext'

const NoteState=(props)=>{

    // const s1={
    //     name:"Priyanshu Shukla",
    //     course:"CSE"
    // }
    // const [state, setState] = useState(s1);
    // const toggle=()=>{
    //     if(state.name==="Priyanshu Shukla")
    //     {
    //         setState({name:"PRU",course:"B.TECH"});
    //     }
    //     else{
    //         setState({name:"Priyanshu Shukla",
    //         course:"CSE"})
    //     }
    // }
    

    const host="http://localhost:5000"
        // const notesInitial= [
        //   {
        //     "_id": "64915868e2a191f42930caae",
        //     "user": "6490b4588b339ce616153e1d",
        //     "title": "API endpoints",
        //     "description": "Creating api end points for sky note",
        //     "tag": "#MERN",
        //     "date": "2023-06-20T07:42:32.790Z",
        //     "__v": 0
        //   },
        //   {
        //     "_id": "649750b4b0c0de51a9bdcd47",
        //     "user": "6490b4588b339ce616153e1d",
        //     "title": "hell_is_world122",
        //     "description": "dip is trend1 2",
        //     "tag": "#fail12",
        //     "date": "2023-06-24T20:23:16.607Z",
        //     "__v": 0
        //   },
        //   {
        //     "_id": "649750b4b0c0de51a9bdcd47",
        //     "user": "6490b4588b339ce616153e1d",
        //     "title": "hell_is_world122",
        //     "description": "dip is trend1 2",
        //     "tag": "#fail12",
        //     "date": "2023-06-24T20:23:16.607Z",
        //     "__v": 0
        //   }, {
        //     "_id": "649750b4b0c0de51a9bdcd47",
        //     "user": "6490b4588b339ce616153e1d",
        //     "title": "hell_is_world122",
        //     "description": "dip is trend1 2",
        //     "tag": "#fail12",
        //     "date": "2023-06-24T20:23:16.607Z",
        //     "__v": 0
        //   }, {
        //     "_id": "649750b4b0c0de51a9bdcd47",
        //     "user": "6490b4588b339ce616153e1d",
        //     "title": "hell_is_world122",
        //     "description": "dip is trend1 2",
        //     "tag": "#fail12",
        //     "date": "2023-06-24T20:23:16.607Z",
        //     "__v": 0
        //   }
        // ]
  const [notes, setNotes] = useState([{}]);


    const fetchingNotes=async ()=>{
      const response = await fetch(`${host}/api/notes/fetchNotes`, {
        method: "GET", // or 'PUT'
        headers: {
          // "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        // body: JSON.stringify({title,description,tag}),
      });
      const result=await response.json();
      // console.log(result.allNotes)
      // console.log(typeof(result))
      console.log(result)
setNotes(result.allNotes);
      // return  result.allNotes;

    }
      


  
  
  const addNote=async (title,description,tag)=>{
  //   const note={
  //     "_id": "649750b4b0c0de51a9bdcd47"+Math.floor(Math.random()*100).toString(),
  //     "user": "6490b4588b339ce616153e1d",
  //     "title":title,
  //     "description":description,
  //     "tag":tag,
  //     "date": "2023-06-24T20:23:16.607Z",
  //     "__v": 0

  //   }
  //  setNotes(notes.concat(note));

  const response = await fetch(`${host}/api/notes/addNotes`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      "auth-token":localStorage.getItem('token')
    },
    body: JSON.stringify({title,description,tag}),
  });
  const result=await response.text();
  // alert(result)
  
 fetchingNotes();




  }
  const login=async (email,pass,vary)=>{
    const response=await fetch(`${host}/api/auth/login`,{

      method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({userName:email,password:pass}),

    })

    const txt=await response.json();
    if(txt.success===false)
    {
      
      // alert("Authentication failed!!")
      vary(false)
    }
    else
   { 
    // alert("Login successful") 

    const setting=async ()=>{

      localStorage.setItem('token',txt.authToken);
    }
  await setting();

  vary(true)

  }

  }

  const deleteNote=async (id)=>{
    // let newNotes= notes.filter((note)=>note._id!== id)
    // let newNotes=notes.filter((note)=>{return note._id!==id})
    // setNotes(newNotes);
    const response= await fetch(`${host}/api/notes/deleteNote/${id}`,{
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      }
    })
    const txt=await response.json();
    // alert(txt);
    fetchingNotes();

  }
  const updateNote=async (id,title,description,tag)=>{
    const response= await fetch(`${host}/api/notes/updateNote/${id}`,{
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag}),
    })

    const rsp=await response.text();
    // alert(rsp);
    fetchingNotes();




  }

const crtUser=async (name,userName,emailId,password,vary)=>{
  const response=await fetch(`${host}/api/auth/signUp`,{
    method:'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name,userName,emailId,password}),


  })
  const txt=await response.json();
  // console.log(txt)
  if(txt.success===true)
  {  
    // alert("Signup done!!"); 
  
    const setting=async ()=>{

      localStorage.setItem('token',txt.authToken);
    }
  await setting();

  vary(true)



}
  else
 { 
  // alert(txt.message)
  vary(false,txt.message)
}






}

    return(
        <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,fetchingNotes,updateNote,login,crtUser}}>
            {props.children}
        </NoteContext.Provider>

    )
}
export default NoteState;