import React, { useContext, useState } from "react";
import Logo from "./Logo";

import { useDispatch, useSelector } from "react-redux";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import SummaryApi from "../common";
import ROLE from "../common/role";
import Context from "../context";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);

  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });
    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <header className="header h-15 shadow-md fixed w-full z-100 bg-gradient-to-r from-white via-black-100 to-black-500 ... customShadowm">
      <div className="h-full container mx-auto flex items-center justify-between">
        <div className="cursor-pointer">
          <Link to={"/"} className="w-full">
            <Logo h={120} w={120} />
          </Link>
        </div>

        <Link to={"/"} className="mx-4 my-6 md:my-0 text-xl hover:text-cyan-500 duration-900 hover:scale-125">
          Home
        </Link>
        <div>
          <h3>You Want find:  </h3>
        </div>
        
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border focus-within:shadow pl-2 customShadow rounded-md">
          <input
            type="text"
            placeholder="..search product here..."
            className="w-full outline-none text-black bg-opacity-10 cursor-pointer hover:bg-white rounded-md customShadown"
            onChange={handleSearch}
            value={search}
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-md hover:text-white cursor-pointer">
            <GrSearch className="hover:scale-110" />
          </div>
        </div>

        <div className="flex items-center gap-10 pr-10">
          <div className="relative flex justify-center">
            <div className="text-4xl cursor-pointer bg-white rounded-full hover:scale-110" onClick={() => setMenuDisplay((prev) => !prev)}>
              {user?.profilePic ? (
                <img src={user?.profilePic} className="w-10 h-10 rounded-full" alt={user?.name} />
              ) : (
                <FaRegCircleUser />
              )}
              {menuDisplay && (
                <div className="absolute bg-white top-11 h-fit text-xl p-1 shadow-lg rounded">
                  <nav>
                    {user?.role === ROLE.ADMIN && (
                      <Link to={"/admin-panel/all-products"} className="whitespace-nowrap hidden md:block hover:bg-slate-300 p-2" onClick={() => setMenuDisplay((prev) => !prev)}>
                        Admin Panel
                      </Link>
                    )}
                  </nav>
                </div>
              )}
            </div>
          </div>

          <Link to={"/cart"} className="text-3xl h-18 cursor-pointer relative bg-white rounded-full hover:scale-110">
            <span>
              <FaShoppingCart />
            </span>
            {user?._id && (
              <div className="bg-red-600 hover:bg-red-400 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                <p className="text-sm">{context?.cartProductCount}</p>
              </div>
            )}
          </Link>

          <div>
            {user?._id ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-l-full text-white bg-red-600 hover:bg-red-900 customShadown"
              >
                Logout
              </button>
            ) : (
              <Link to={"/login"} className="px-5 py-2 rounded-l-full text-white bg-red-600 hover:bg-red-900 customShadown">
                Login
              </Link>
            )}
          </div>
        </div>
        
        {/* Dialogflow Messenger */}
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
        <df-messenger intent="WELCOME" chat-title="Chat-al" agent-id="0786cf5f-5aed-40be-9773-455ead5121ba" language-code="vi"></df-messenger>
      </div>
    </header>
  );
};

export default Header;