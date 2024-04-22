import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';

const AdminPanel = () => {
    const user = useSelector(state => state?.user?.user)
    const navigate = useNavigate()


    useEffect(()=>{
        if(user?.role !== ROLE.ADMIN){
            navigate("/")
        }
    },[user])
  return (
    <div className=' min-h-[calc(100vh-120px)] md:flex hidden bg-white '>

        <aside className= 'pt-20  min-h-full  w-full  max-w-60 customShadow bg-gradient-to-r from-gray-500 to-transparent '>
                <div className='h-32  flex justify-center items-center flex-col'>
                    <div className='text-5xl cursor-pointer relative flex justify-center'>
                        {
                        user?.profilePic ? (
                            <img src={user?.profilePic} className='w-20 h-20 rounded-full' alt={user?.name} />
                        ) : (
                            <FaRegCircleUser/>
                        )
                        }
                    </div>
                    <p className='capitalize text-lg font-semibold'>{user?.name}</p>
                    <p className='text-sm'>{user?.role}</p>
                </div>

                 {/***navigation */}       
                <div>   
                    <nav className='grid p-4'>
                        <Link to={"all-users"} className="customShadow bg-indigo-500 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer 
               uppercase transition duration-200 ease-in-out rounded-md hover:bg-red-700 focus-visible:outline-
               none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95 hover:scale-110 ">All Users</Link>
                        <Link to={"all-products"} className="customShadow mt-5 bg-indigo-500 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer 
               uppercase transition duration-200 ease-in-out rounded-md hover:bg-red-700 focus-visible:outline-
               none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95 hover:scale-110 ">All product</Link>
                    </nav>
                </div>  
        </aside>

        <main className='w-full h-full p-2'>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminPanel