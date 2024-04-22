import React, { useEffect, useState } from 'react'
import UploadProduct from '../Components/UploadProduct'
import SummaryApi from '../common'
import AdminProductCard from '../Components/AdminProductCard'
// import AdminProductCard from '../Components/AdminProductCard'
// import UploadProduct from '../components/UploadProduct'
// import SummaryApi from '../common'
// import AdminProductCard from '../components/AdminProductCard'

const AllProducts = () => {
  const [openUploadProduct,setOpenUploadProduct] = useState(false)
  const [allProduct,setAllProduct] = useState([])

  const fetchAllProduct = async() =>{
    const response = await fetch(SummaryApi.allProduct.url)
    const dataResponse = await response.json()

    console.log("product data",dataResponse)

    setAllProduct(dataResponse?.data || [])
  }

  useEffect(()=>{
    fetchAllProduct()
  },[])
  
  return (
    <div>
   
      <div className='pt-3'>If you want more products, please add them here!</div>
        <div className=' py-2 px-4 flex justify-between items-center mt-1 customShadow bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'>
            <h2 className='font-bold text-lg'>All Product </h2>
            <button  className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full 'onClick={()=>setOpenUploadProduct(true)} >Upload Product</button>
        </div>

{/**all product */}
<div className=' flex justify-center items-center flex-wrap gap-3 py-4 h-[calc(75vh-50px)]  overflow-y-scroll pt-2'>
          {
            allProduct.map((product,index)=>{
              return(
                // <div>
                //   <img src={product?.productImage[0]} width={220} height={220}/>
                //   <h1>{product.productName}</h1>
                // </div> 
                <AdminProductCard data={product} key={index+"allProduct"} fetchdata={fetchAllProduct}/>
                
              )
            })
          }
        </div>



        
      
{/**upload prouct component */}
{
          openUploadProduct && (
            <UploadProduct onClose={()=>setOpenUploadProduct(false)} fetchData={fetchAllProduct}/>
          )
        }
    </div>
  )
}

export default AllProducts