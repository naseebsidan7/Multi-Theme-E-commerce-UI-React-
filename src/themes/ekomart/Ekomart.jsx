import './ekomart.css'
import Layout from '../../common/layout/Layout'
import { Footer, Header, Hero, ProductSection} from './sections'
import { arrow_up } from '../../assets/Ekomart_Assets'

const Ekomart = () => {
  return (
      <Layout header={<Header />} footer={<Footer />}>
       
       <Hero/>
       <ProductSection/>
         { }
        <div>
        <button className="scroll-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
           <img src={arrow_up} alt="" />
        </button>
        </div>
     </Layout>
  )
}

export default Ekomart