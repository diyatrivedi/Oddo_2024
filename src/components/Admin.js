// import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';


// const Admin = () => {
//     const navigate = useNavigate();
//     // const notify = () => toast("Wow so easy!");
//     const [user, setUser] = useState({
//     //   Enrollment_no: "",
//       email: "",
//       password: "",
//     });
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setUser({
//         ...user,
//         [name]: value,
//       });
//     };
//     const login = async (e) => {
//       e.preventDefault();
//       const res = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         body: JSON.stringify(user),
//         headers: { "Content-Type": "application/json" },
//       });
//       const data1 = await res.json();
//       // alert(data1.message);
//       if(data1.success){
//         toast.success(data1.message,{
//           position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//        closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//        theme: "dark",
//         });
//       }else{
//         toast.error(data1.message,{
//           position: "top-right",
//     autoClose: 3000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//         });
//       }
    
//       console.log(data1.success);
//       setLoginUser(data1.user);
//       if (data1.success) {
//         navigate("/");
//       }
//     };
//     return(
//         <div className="flex flex-col items-center justify-center  mx-auto ">
       
//         <div className="w-full bg-white bg-opacity-25 rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700 backdrop-blur-sm  ">


       
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
//               Sign in to your account
//             </h1>
//             <form className="space-y-4 md:space-y-6" action="#" onSubmit={login}>
            
//               <div>
//                 <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
//                 <input type="email" value={user.email} name="email" id="email" onChange={handleChange}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
//               </div>

//               <div>
//                 <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
//                 <input type="password" value={user.password} name="password" id="password" placeholder="••••••••" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
//               </div>

              
            
//               <button type="submit" class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-gray-700 dark:focus:ring-primary-800 ">Login</button>
           
//             </form>
//           </div>
//         </div>
//       </div>
//     )
// }

// export default Admin


import React from 'react'

const Admin = () => {
  return (
    <div>Admin</div>
  )
}

export default Admin