import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgFruits from '../../assets/fruits-banner.webp'

const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruite & Veggies" bgImage={BgFruits} categories={['Fruits','Vegetables']}/>
    </div>
  )
}

export default Fruits