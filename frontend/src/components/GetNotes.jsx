// import React, { useState, useEffect } from 'react'
// import axiosInstance from '../apis/Api'
// import DeleteNotes from './DeleteNotes'
// import UpdateNotes from './UpdateNotes'

// const GetNotes = () => {
    
//     const [Notes, setNotes]=useState([])

//     const getNotes=async()=>{
//         const response=await axiosInstance.get("/get-notes",{
//             headers:{
//                 Authorization:`Bearer ${localStorage.getItem("token")}`
//             }
//         })    
//         setNotes(response.data.notes);
//     }

//     useEffect(()=>{
//         getNotes()
//     },[])

//   return (
//    <>
//     <div>
//         <h2>GetNotes</h2>
//         <div>
//             <div>
//                 <h6><b><u>Total Notes ---</u></b>  {Notes.length}</h6>
//                 {Notes.map((note)=>{
//                    return <div key={note._id}>
//                             <h3>{note.title}</h3>
//                             <p>{note.description}</p>
//                             <i>{note.createdAt.split("T")[0]}</i>
//                             <div>
                            
//                             <UpdateNotes noteId={note._id} allNotes={getNotes}/>
//                             <DeleteNotes  noteId={note._id} allNotes={getNotes}/>
//                             </div>
//                     </div>
//                 })}

//             </div>
//         </div>
//     </div>
    
//    </>
//   )
// }

// export default GetNotes


import React, { useState, useEffect } from 'react';
import axiosInstance from '../apis/Api';
import DeleteNotes from './DeleteNotes';
import UpdateNotes from './UpdateNotes';

const GetNotes = () => {
    const [Notes, setNotes] = useState([]);

    const getNotes = async () => {
        const response = await axiosInstance.get("/get-notes", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        setNotes(response.data.notes);
    };

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <div className='bg-gray-100 min-h-screen p-8'>
            <div className='max-w-4xl mx-auto'>
                <h2 className='text-3xl font-bold text-gray-900 text-center mb-6'>Get Notes</h2>
                <div className='bg-white p-6 rounded-lg shadow-lg'>
                    <h6 className='text-lg font-semibold text-gray-800'><u>Total Notes:</u> {Notes.length}</h6>
                    {Notes.map((note) => (
                        <div key={note._id} className='border-b border-gray-300 py-4'>
                            <h3 className='text-xl font-semibold text-gray-900'>{note.title}</h3>
                            <p className='text-gray-700 mt-2'>{note.description}</p>
                            <i className='text-gray-500 text-sm'>{note.createdAt.split("T")[0]}</i>
                            <div className='mt-4 flex space-x-4'>
                                <UpdateNotes noteId={note._id} allNotes={getNotes} />
                                <DeleteNotes noteId={note._id} allNotes={getNotes} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GetNotes;
