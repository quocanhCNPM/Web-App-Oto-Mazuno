import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { Link } from 'react-router-dom'

const CategoryList = () => {
    const [categoryProduct,setCategoryProduct] = useState([])
    const [loading,setLoading] = useState(false)

    const categoryLoading = new Array(13).fill(null)

    const fetchCategoryProduct = async() =>{
        setLoading(true)
        const response = await fetch(SummaryApi.categoryProduct.url)
        const dataResponse = await response.json()
        setLoading(false)
        setCategoryProduct(dataResponse.data)
    }

    useEffect(()=>{
        fetchCategoryProduct()
    },[])

  return (
    <div className='container mx-auto p-1 mt-5 '>
           <div className='flex items-center gap-4 justify-between    '>
            {

                loading ? (
                    categoryLoading.map((el,index)=>{
                            return(
                                <div className='  md:w-20 md:h-20 rounded overflow-hidden bg-slate-700 animate-pulse' key={"categoryLoading"+index}>
                                </div>
                            )
                    })  
                ) :
                (
                    categoryProduct.map((product, index) => {
    return (
        <Link to={"/product-category?category=" + product?.category} className='cursor-pointer' key={product?.category}>
            <div className='bg-gray-200 p-1 customShadow md:w-30 md:h-30 border-double border-4 border-indigo-300 ... '>
                <img src={product?.productImage[0]} alt={product?.category} className='object-scale-down mix-blend-multiply hover:scale-125 transition-all items-center img overflow-hidden' />
            </div>
            <p className='font-semibold text-slate-1000 text-center capitalize text-sm w-35 py-5 whitespace-nowrap'>{product?.category}</p>
        </Link>
    );
})
                )
            }
           </div>
           
    </div>
  )
}

export default CategoryList