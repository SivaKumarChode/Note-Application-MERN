// import React, { useState } from "react";
// import axiosInstance from "../apis/Api";
// import { useNavigate } from "react-router-dom";

// const DeleteNotes = ({ noteId, allNotes }) => {
//   const navigate = useNavigate();
//   const handleDelete = async (delete_id) => {
//     if(!delete_id){
//         navigate("/get-note")
//     }
//     try {
//         await axiosInstance.delete(`/delete-notes/${delete_id}`,{
//             headers:{
//                 Authorization:`Bearer ${localStorage.getItem("token")}`
//             }
//         })
//         allNotes()
//     } catch (error) {
//         console.log(error);
        
//     }
//   }
//   return (
//     <div>
//       <button onClick={() => handleDelete(noteId)}>Delete</button>
//     </div>
//   );
// };

// export default DeleteNotes;



import React, { useState } from "react";
import axiosInstance from "../apis/Api";
import { useNavigate } from "react-router-dom";

const DeleteNotes = ({ noteId, allNotes }) => {
  const navigate = useNavigate();
  
  const handleDelete = async (delete_id) => {
    if (!delete_id) {
      navigate("/get-note");
    }
    try {
      await axiosInstance.delete(`/delete-notes/${delete_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      allNotes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mt-4'>
      <button 
        onClick={() => handleDelete(noteId)} 
        className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition'
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteNotes;
