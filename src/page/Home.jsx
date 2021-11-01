import React from 'react';
import Helmet from '../components/Helmet';
import Heroslider from '../components/Heroslider';
import heroSliderData from '../assets/fake-data/hero-slider';
import Section, {Sectiontitle ,Sectionbody } from '../components/Section';
import policy from '../assets/fake-data/policy';
import PolicyCart from '../components/PolicyCart';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom';
import productData from '../assets/fake-data/products';
import banner from '../assets/images/banner.png'

const Home = () => {
    return (
       <Helmet title='Trang chủ'>
           {/* {HeroSlider} */}
           <Heroslider
            data={heroSliderData}
            control={true}
            auto={true}
            timeout={5000}/>
           {/* {endSilder} */}
            {/* sectionstart */}
           <Section>
               <Sectionbody>
                    
                        <Grid
                        col={4}
                        smCol={1}
                        mdCol={2}
                        gap={20}>
                            {
                         policy.map((item, index) =>(
                           <Link key={index} to='/policy'>
                                <PolicyCart
                                name={item.name}
                                description={item.description}
                                icon={item.icon} />
                           </Link>
                            ))
                         }
                        </Grid>
               </Sectionbody>
           </Section>
          <Section>
          <Sectiontitle>
                  Top sản phẩm bán chạy trong tuần
                  </Sectiontitle>
                  <Sectionbody>
                  <Grid
                   col={4}
                   mdCol={2}
                   smCol={1}
                   gap={20}>
                       {
                           productData.getProducts(4).map((item, index)=>(
                                 <ProductCard
                                 key={index}
                                 title={item.title}
                                  image01={item.image01}
                                  image02={item.image02}
                                  price={item.price}
                                  slug={item.slug}
                                  >

                                 </ProductCard>
                           ))
                       }
                       
                   </Grid>
                  </Sectionbody>
                
          </Section>
            
           {/* sectionend */}

           {/* newsection */}
            <Section>

                <Sectiontitle>
                    sản phẩm mới
                </Sectiontitle>
                <Sectionbody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}>
                        {
                            productData.getProducts(8).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    title={item.title}
                                    image01={item.image01}
                                    image02={item.image02}
                                    price={item.price}
                                    slug={item.slug}
                                >

                                </ProductCard>
                            ))
                        }

                    </Grid>
                </Sectionbody>
            </Section>
           {/* end */}
            <Sectionbody>
                <img src={banner} alt="" />
            </Sectionbody>
            <Section>

<Sectiontitle>
    sản phẩm Phổ biến
</Sectiontitle>
<Sectionbody>
    <Grid
        col={4}
        mdCol={2}
        smCol={1}
        gap={20}>
        {
            productData.getProducts(12).map((item, index) => (
                <ProductCard
                    key={index}
                    title={item.title}
                    image01={item.image01}
                    image02={item.image02}
                    price={item.price}
                    slug={item.slug}
                >

                </ProductCard>
            ))
        }

    </Grid>
</Sectionbody>
</Section>
 
       </Helmet>
    )
}

export default Home
