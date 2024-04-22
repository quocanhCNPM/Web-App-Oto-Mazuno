import React, { useContext, useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import imageTobase64 from "../Helpers/imageTobase64";
import SummaryApi from "../common";
import { toast } from 'react-toastify';
import Context from "../context";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
  });
  const navigate = useNavigate()
  const { fetchUserDetails } = useContext(Context)

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
   
    if(data.password === data.confirmPassword){
      const dataResponse = await fetch(SummaryApi.signUP.url,{
        method : SummaryApi.signUP.method,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
      const dataApi = await dataResponse.json()
      if(dataApi.success){
        toast.success(dataApi.message)
        navigate("/Login")
        // đăng kí thành công nhảy qua login
      }
      if(dataApi.error){
        toast.error(dataApi.message)
      }
      
console.log("data",dataApi)
}else{
  console.log("Please check password and confirm password")
}
    }
      
       





 
  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await imageTobase64(file);
    console.log("file", file);
    setData((preve) => {
      return {
        ...preve,
        profilePic: imagePic,
      };
    });
  };

  return (
    <section
      id="signup"
      className="bg-gradient-to-r from-black via-gray-100 to-black-500 ... "
    >
      <div className="mx-auto container p-4">
        <div className="bg-black bg-opacity-20 p-5 w-full max-w-sm mx-auto  hover:bg-gradient-to-b from-neutral-700 via-gray-400 to-gray-500 customShadow">
          <div className=" w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic || loginIcons} alt="login icons" />
            </div>
            <form>
              <label>
                <div className=" text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>

          <form className=" pt-5 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Name : </label>
              <div className="bg-slate-100 p-2 customShadow">
                <input
                  type="text"
                  placeholder="enter your name"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label>Email : </label>
              <div className="bg-slate-100 p-2 customShadow">
                <input
                  type="email"
                  placeholder="enter email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Password : </label>
              <div className="bg-slate-100 p-2 flex customShadow">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  value={data.password}
                  name="password"
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>

            <div>
              <label>Confirm Password : </label>
              <div className="bg-slate-100 p-2 flex customShadow">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="enter confirm password"
                  value={data.confirmPassword}
                  name="confirmPassword"
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />

                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((preve) => !preve)}
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>

            <button
              className="customShadow bg-indigo-500 hover:bg-red-700 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer 
               uppercase transition duration-200 ease-in-out rounded-md hover:scale-110 focus-visible:outline-
               none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
            >
              Sign Up
            </button>
          </form>

          <p className="my-5">
            Already have account ?{" "}
            <Link
              to={"/login"}
              className=" text-red-600 hover:text-red-700 hover:underline"
            >
              Login
            </Link>
          </p>
          <Link to={"/"}>
            <button
              className="customShadow bg-indigo-500 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer 
               uppercase transition duration-200 ease-in-out rounded-md hover:bg-red-700 focus-visible:outline-
               none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95 hover:scale-110 "
            >
              Come Back Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
