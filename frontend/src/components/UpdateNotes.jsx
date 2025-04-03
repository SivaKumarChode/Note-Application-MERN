// import React, { useState, useEffect } from "react";
// import axiosInstance from "../apis/Api";

// const UpdateNotes = ({ noteId, allNotes }) => {
//   const [update, setUpdate] = useState({
//     title: "",
//     description: "",
//   });
//   const [openEdit, setOpenEdit] = useState(false);

//   const handleChange = (e) => {
//     setUpdate({ ...update, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axiosInstance.put(`/update-notes/${noteId}`, update, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       setUpdate({ title: "", description: "" });
//       setOpenEdit(false);
//       allNotes(); // Refresh notes list
//     } catch (error) {
//       console.log("Error updating note:", error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={()=>setOpenEdit(true)}>Edit</button>
//       {openEdit && (
//         <div>
//           <h2>Update Notes</h2>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="title"
//               placeholder="Title"
//               value={update.title}
//               onChange={handleChange}
//             />
//             <textarea
//               name="description"
//               cols="30"
//               rows="5"
//               placeholder="Description"
//               value={update.description}
//               onChange={handleChange}
//             ></textarea>
//             <button type="submit">Update</button>
//             <button type="button" onClick={() => setOpenEdit(false)}>
//               Cancel
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UpdateNotes;


import React, { useState, useEffect } from "react";
import axiosInstance from "../apis/Api";

const UpdateNotes = ({ noteId, allNotes }) => {
  const [update, setUpdate] = useState({
    title: "",
    description: "",
  });
  const [openEdit, setOpenEdit] = useState(false);

  const handleChange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/update-notes/${noteId}`, update, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUpdate({ title: "", description: "" });
      setOpenEdit(false);
      allNotes(); // Refresh notes list
    } catch (error) {
      console.log("Error updating note:", error);
    }
  };

  return (
    <div className='mt-4'>
      <button onClick={() => setOpenEdit(true)} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'>
        Edit
      </button>
      {openEdit && (
        <div className='mt-4 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Update Notes</h2>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <input
              type='text'
              name='title'
              placeholder='Title'
              value={update.title}
              onChange={handleChange}
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <textarea
              name='description'
              cols='30'
              rows='5'
              placeholder='Description'
              value={update.description}
              onChange={handleChange}
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            ></textarea>
            <div className='flex space-x-4'>
              <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition'>
                Update
              </button>
              <button type='button' onClick={() => setOpenEdit(false)} className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition'>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateNotes;