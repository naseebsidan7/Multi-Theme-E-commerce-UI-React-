import './Electro.css'
import Layout from '../../common/layout/Layout'
import { Footer, Header, Hero, ProductSection} from './sections'
import { arrowupwhite } from '../../assets/Electro_Assets'
 

const Ekomart = () => {
  return (
      <Layout header={<Header />} footer={<Footer/>} >
       
       <Hero/>
        <ProductSection/>
      
        <div>
          <button className="scroll-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src={arrowupwhite} alt="arrowupwhite" />
          </button>
        </div>
     </Layout>
  )
}

export default Ekomart