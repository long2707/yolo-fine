import React from 'react'

import productData from '../assets/fake-data/products'
import Helmet from '../components/Helmet'
import Section , {Sectionbody, Sectiontitle} from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/productView'
const Product = props => {
    const product = productData.getProductBySlug(props.match.params.slug)
     console.log(product)
     
  
    return (
       <Helmet title={product.title}>
          <Section>
              <Sectionbody>
                  <ProductView  product={product}/>
              </Sectionbody>
          </Section>
          <Section>
              <Sectiontitle> Khám phá thêm</Sectiontitle>

              <Sectionbody>
              <Grid
                   col={4}
                   mdCol={2}
                   smCol={1}
                   gap={20}>
                       {
                           productData.getProducts(8).map((item, index)=>(
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

export default Product
