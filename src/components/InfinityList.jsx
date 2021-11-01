import React , {useState  , useRef, useEffect} from 'react'
import PropTypes from 'prop-types'

import Grid from './Grid'
import ProductCard from './ProductCard'
const InfinityList = props => {
     const iniRef = useRef(null);

     const [data, setData] =useState(props.data)
useEffect(() => {
     setData(props.data)
}, [props.data])

    return (
        <div ref={iniRef}>
            <Grid col={3}
                mdCol={2}
                smCol={1}
                gap={10}>
                {
                  data.map((item, index) => (
                    <ProductCard
                      key={index}
                      image01={item.image01}
                      image02={item.image02}
                      title={item.title}
                      price={item.price}
                      slug={item.slug}
                    >

                    </ProductCard>
                  ))
                }
              </Grid>
        </div>
    )
}

InfinityList.propTypes = {
  data : PropTypes.array.isRequired
}

export default InfinityList
