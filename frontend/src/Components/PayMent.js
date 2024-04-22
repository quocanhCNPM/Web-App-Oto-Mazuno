import React from 'react';

function myFunction() {
  alert("Payment successful");
}

const PayMent = () => {
  return (
    <div className='bg-gradient-to-r from-black via-gray-100 to-black-500' >
      <div className='mx-auto container p-1 pt-1'>
        <div>
          <img src='https://123website.com.vn/wp-content/uploads/2021/08/cong-thanh-toan-paypal.jpg' alt='' />
        </div>
        <form className='pt-5 flex flex-col gap-5'>
          <div className='customShadow bg-amber-500 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-full hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2'>PaPal</div>
          <div className='customShadow bg-amber-500  px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-full hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2'>Pay Later</div>
          {/* Các trường form */}
          <div className="customShadow bg-indigo-500 hover:bg-red-700 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 ">
            <button onClick={myFunction}>THANH TOÁN QUA PAYPAL</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PayMent;