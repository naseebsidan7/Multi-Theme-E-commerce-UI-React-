 
import { productData } from '../../../../constants/indxex'
import { DiscountProducts, Discounts, FeaturedProducts, WeeklyBest } from '../../components'
import './Products.css'

const ProductSection = () => {
     
  return (
    <div>
       <FeaturedProducts />
       <DiscountProducts />
       <WeeklyBest />
       <Discounts />
    </div>
  )
}

export default ProductSection
