// import React from 'react'
// import { useState } from 'react'
// import {} from "react-router-dom"
// import axiosInstance from '../apis/Api'
// const CreateNote = () => {

//     const [CreateNote , setCreateNote]=useState({
//         title:"",
//         description:""
//     })
//     const [message, setMessage]=useState("")

//     const handleChange=(e)=>{
//         setCreateNote({...CreateNote,[e.target.name]:e.target.value})
//     }

//     const  handleSubmit=async(e)=>{
//         e.preventDefault()
//         try {
//             const response=await axiosInstance.post("/create-notes",CreateNote,{
//                 headers:{
//                     Authorization:`Bearer ${localStorage.getItem("token")}`
//                 }
//             })
//             setMessage(response.data.message)
            
//         } catch (error) {
//             console.log(error);
//         }
//     }
//   return (
//     <div className='createNote'>
//         <h2>Create - Notes</h2>

//         <form onSubmit={handleSubmit}>
//             <input type="text" name="title" id="title"  placeholder='Title' onChange={handleChange}/>
//             <br /><br />
//             <textarea name="description" id="description" cols="30" rows="10" placeholder='Description'  onChange={handleChange}></textarea>
//             <br /><br />
//             <button type="submit">create-note</button>
//         </form>
//         <h5>  {message}</h5>
//     </div>
//   )
// }

// export default CreateNote



import React from 'react';
import { useState } from 'react';
import {} from "react-router-dom";
import axiosInstance from '../apis/Api';

const CreateNote = () => {
    const [CreateNote, setCreateNote] = useState({
        title: "",
        description: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setCreateNote({ ...CreateNote, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("/create-notes", CreateNote, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setMessage(response.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='createNote bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>Create - Notes</h2>
            <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
                <input 
                    type="text" 
                    name="title" 
                    id="title"  
                    placeholder='Title' 
                    onChange={handleChange} 
                    className='w-full p-2 border border-gray-300 rounded mb-4'
                />
                <textarea 
                    name="description" 
                    id="description" 
                    cols="30" 
                    rows="5" 
                    placeholder='Description'  
                    onChange={handleChange} 
                    className='w-full p-2 border border-gray-300 rounded mb-4'
                ></textarea>
                <button 
                    type="submit" 
                    className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition'
                >
                    Create Note
                </button>
            </form>
            <h5 className='text-green-600 mt-4'>{message}</h5>
        </div>
    );
};

export default CreateNote;
