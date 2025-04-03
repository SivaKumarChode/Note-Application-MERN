// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'


// const Nav = () => {

//     const navigate=useNavigate()
//     const handleLogout=()=>{
//         localStorage.removeItem("token")
//         localStorage.removeItem("user")
//         navigate("/login")
//     }
//   return (
//     <div>
//         <nav>
//             <div>Note-Me</div>
//             <div>
//                 <ul>
//                     <li><Link to="/get-note">Notes</Link></li>
//                 </ul>
//             </div>
//         </nav>
//         <div>
//             <button onClick={handleLogout}>Logout</button>
//         </div>
//     </div>
//   )
// }

// export default Nav


import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className='bg-gray-900 text-white p-4 shadow-md'>
            <nav className='flex justify-between items-center max-w-4xl mx-auto'>
                <div className='text-xl font-bold'>Note-Me</div>
                <div>
                    <ul className='flex space-x-4'>
                        <li>
                            <Link to="/get-note" className='hover:text-blue-400 transition'>Notes</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='flex justify-end mt-2'>
                <button 
                    onClick={handleLogout} 
                    className='bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600 transition'
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Nav;
