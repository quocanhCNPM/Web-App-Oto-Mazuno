import React from 'react'
import CategoryList from '../Components/CategoryList'
import BannerProduct from '../Components/BannerProduct'
import HorizontalCardProduct from '../Components/HorizontalCardProduct'
import VerticalCardProduct from '../Components/VerticalCardProduct'

const Home = () => {
  return (
    <div className='bg-gray-300 pl-5 pr-5 '>
       <CategoryList/>
       <BannerProduct/>
       <HorizontalCardProduct category={"Lamborghini"} heading={"Top's Lamborghini"}/>
       <HorizontalCardProduct category={"Bugatti"} heading={"Pupollar Bugatti"}/>
       <HorizontalCardProduct category={"Ferrari"} heading={"Pupollar Ferrari"}/>
       
       <VerticalCardProduct category={"Mercedes-Benz"} heading={"Mercedes-Benz"}/>
       <VerticalCardProduct category={"Kia"} heading={"Kia"}/>
       <VerticalCardProduct category={"Nissan"} heading={"Nissan"}/>
       <VerticalCardProduct category={"cRolls-Royce"} heading={"cRolls-Royce"}/>
       <VerticalCardProduct category={"Subaru"} heading={"Subaru"}/>
       <VerticalCardProduct category={"Land Rover"} heading={"Land Rover"}/>
       <VerticalCardProduct category={"Vinfast"} heading={"Vinfast"}/>
       <VerticalCardProduct category={"Toyota"} heading={"Toyota"}/>
    </div>
    
  )
}

export default Home