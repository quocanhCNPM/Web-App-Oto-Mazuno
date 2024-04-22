import React, { useContext, useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';




const Login = () => {
    const [showPassword,setShowPassword] = useState(false)
    const [data,setData] = useState({
        email : "",
        password : ""
    })
    const navigate = useNavigate()
    const { fetchUserDetails,fetchUserAddToCart } = useContext(Context)
    

    const handleOnChange = (e) =>{
        const { name , value } = e.target

        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()

        const dataResponse = await fetch(SummaryApi.signIn.url,{
            method : SummaryApi.signIn.method,
            credentials : 'include',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()

        if(dataApi.success){
            toast.success(dataApi.message)
            navigate('/')
            fetchUserDetails()
            fetchUserAddToCart()
        }

        if(dataApi.error){
            toast.error(dataApi.message)
        }

    }
    console.log("data login",data)
  return (
    <section id='login' className='  bg-gradient-to-r from-black via-gray-100 to-black-500 ... '>
        <div className='mx-auto container p-12 pt-10 '>
        <div className='bg-black bg-opacity-20 p-5 w-full max-w-sm mx-auto  hover:bg-gradient-to-b from-neutral-700 via-gray-400 to-gray-500 customShadow'>
        <div className='w-20 h-20 mx-auto bg-black rounded-full'>
                        <img src={loginIcons} alt='login icons'/>
                    </div>
                    <form className='pt-9 flex flex-col gap-5' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2 customShadow'>
                                <input 
                                    type='email' 
                                    placeholder='enter email' 
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent'/>
                            </div>
                            </div>
                            <div>
                            <label>Password : </label>
                            <div className='bg-slate-100 p-2 flex customShadow'>
                                <input 
                                    type={showPassword ? "text" : "password"}
                                    placeholder='enter password'
                                    value={data.password}
                                    name='password' 
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent'/>
                                    <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                                                         {/* click vào thay đổi hiện cập nhật trạng thái set lại( hiện hoặc không hiện) */}
                                        <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                        </span>
                                    </div>
                                    </div>
                                    <Link to={'/forgot-password'} className='block w-fit pr-10 pt-3 ml-auto hover:underline hover:text-red-600'>
                                Forgot password ?
                            </Link>
                                    </div>
                                    <div className="customShadow bg-indigo-500 hover:bg-red-700 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer 
               uppercase transition duration-200 ease-in-out rounded-md hover:scale-110 focus-visible:outline-
               none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95">
                                          <button>LOG IN NOW</button>
                                    </div>
                                    
                                    
                            </form>
                            <p className='my-5'>Don't have account ? <Link to={"/sign-up"} className=' text-white hover:text-red-700 hover:underline customShadow rounded-full'>Sign up</Link></p>
                            <div className='cursor-pointer '>
          <Link to={"/"}>
                    <button className="customShadow bg-indigo-500 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer 
               uppercase transition duration-200 ease-in-out rounded-md hover:bg-red-700 focus-visible:outline-
               none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95 hover:scale-110 ">Come Back Home</button>
                </Link>
          </div>
                            </div>
                            </div>
                           
       
    </section>
  )
}

export default Login