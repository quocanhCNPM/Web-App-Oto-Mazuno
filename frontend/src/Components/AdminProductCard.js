import React, { useState } from 'react'
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from './AdminEditProduct';
import displayINRCurrency from '../Helpers/displayCurrency';


const AdminProductCard = ({
    data,
    fetchdata
}) => {
    const [editProduct,setEditProduct] = useState(false)

  return (
    <div className='bg-gray-400 p-4 rounded customShadow max-w-[170px] min-w-[190px] '>
       <div className='w-50'>
            <div className='w-30 h-32 flex justify-center items-center '>
              <img src={data?.productImage[0]}  className='mx-auto object-fill h-full'/>   
            </div> 
            <h1 className='text-ellipsis line-clamp-2'>{data.productName}</h1>

            <div>

            <p className='font-semibold'>
                  {
                    displayINRCurrency(data.sellingPrice)
                  }
        
                </p>

                <div className='w-fit ml-auto p-2 bg-green-300 hover:bg-green-600 rounded-full hover:text-white cursor-pointer' onClick={()=>setEditProduct(true)}>
                    <MdModeEditOutline/>
                </div>

            </div>

          
       </div>
        
        {
          editProduct && (
            <AdminEditProduct productData={data} onClose={()=>setEditProduct(false)} fetchdata={fetchdata}/>
          )
        }
    
    </div>
    

// {/* <div className='bg-gray-200 p-4 rounded customShadow grid grid-cols-3 gap-4'>
//     <div className='w-50 flex flex-col'>
//       <div className='w-30 h-32 flex justify-center items-center'>
//         <img src={data?.productImage[0]} className='mx-auto object-fill h-full' />
//       </div>
//       <h1 className='text-ellipsis line-clamp-2'>{data.productName}</h1>
//       <div className='flex items-center justify-between'>
//         <p className='font-semibold'>
//           {displayINRCurrency(data.sellingPrice)}
//         </p>
//         <div className='p-2 bg-green-300 hover:bg-green-600 rounded-full hover:text-white cursor-pointer' onClick={() => setEditProduct(true)}>
//           <MdModeEditOutline />
//         </div>
//       </div>
//     </div>
//     {editProduct && <AdminEditProduct productData={data} onClose={() => setEditProduct(false)} fetchdata={fetchdata} />}
  
//     <div className='w-80 flex flex-col'>
//       {/* Sản phẩm thứ 2 */}
//     </div>
  
//     <div className='w-80 flex flex-col'>
//       {/* Sản phẩm thứ 3 */}
//     </div>
  
//     {/* Các sản phẩm còn lại sẽ theo chiều dọc */}
//   </div> */}


  )
}

export default AdminProductCard
