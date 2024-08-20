import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox.jsx'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'

function SignUp() {

  const [inputs,setInputs] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  }) 

  const {loading , signup} = useSignup()

  const handleCheckboxChange = (gender) =>{
    setInputs({...inputs,gender})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault(); //for preventing the page reload
    await signup(inputs)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
      bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300 '>
          SignUp
            <span className='text-blue-500'> Duo Chat </span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className='label p-2'><span className='text-base-label-text text-white'>Full Name</span></label>
              <input type='text' placeholder='Enter Your Full Name' className='w-full input input-bordered h-10'
              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
              />
            </div>
            <div>
              <label className='label p-2'><span className='text-base-label-text text-white'>Username</span></label>
              <input type='text' placeholder='Enter Your Username' className='w-full input input-bordered h-10'
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
              />
            </div>
            <div>
              <label className='label'><span className='text-base-label-text'>Password</span></label>
              <input type='password' placeholder='Enter Your Password' className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs, password: e.target.value})}
              />
            </div>
            <div>
              <label className='label'><span className='text-base-label-text text-white'>Confirm Password</span></label>
              <input type='password' placeholder='Enter Your Confirm Password' className='w-full input input-bordered h-10'
              value={inputs.confirmPassword}
              onChange={(e)=> setInputs({...inputs, confirmPassword:e.target.value})}
              />
            </div>

          {/* {Gender CheckBox } */}
          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender }/>

            <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white'>
            Already have an account? 
            </Link>
            <div>
              <button className='btn btn-block btn-sm mt-2 border border-slate-700 ' disabled={loading}
              >
                {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
              </button>
            </div>
          </form>
      </div>

    </div>
  )
}

export default SignUp




// starter code for signup component
// function SignUp() {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
//       bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300 '>
//           SignUp
//             <span className='text-blue-500'>  Chat App</span>
//           </h1>
//           <form>
//             <div>
//               <label className='label p-2'><span className='text-base-label-text'>Full Name</span></label>
//               <input type='text' placeholder='Enter Your Full Name' className='w-full input input-bordered h-10'/>
//             </div>
//             <div>
//               <label className='label p-2'><span className='text-base-label-text'>Username</span></label>
//               <input type='text' placeholder='Enter Your Username' className='w-full input input-bordered h-10'/>
//             </div>
//             <div>
//               <label className='label'><span className='text-base-label-text'>Password</span></label>
//               <input type='password' placeholder='Enter Your Password' className='w-full input input-bordered h-10'/>
//             </div>
//             <div>
//               <label className='label'><span className='text-base-label-text'>Confirm Password</span></label>
//               <input type='password' placeholder='Enter Your Confirm Password' className='w-full input input-bordered h-10'/>
//             </div>

//           {/* {Gender CheckBox } */}
//           <GenderCheckbox/>

//             <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//             Already have an account? 
//             </a>
//             <div>
//               <button className='btn btn-block btn-sm mt-2'>SignUp</button>
//             </div>
//           </form>
//       </div>

//     </div>
//   )
// }

// export default SignUp