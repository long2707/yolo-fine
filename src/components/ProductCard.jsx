import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import Button from './Button'
import numberWithCommas from '../utils/Numberwillcommas'

const ProductCard = props => {
    return (
        <div className="product__card">
            <Link to={`/catalog/${props.slug}`}>
               <div className="product__card__image">
                   <img src={props.image01} alt="" />
                   <img src={props.image02} alt="" />
               </div>
               <h3 className="product__card___name">{props.title}</h3>
               <div className="product__card__price">
              { numberWithCommas(props.price)}
                   <span className="product__card__price__old">
                       <del>{numberWithCommas(399900)}</del>
                   </span>
               </div>
            </Link>
            <div className="product__card__btn">
           
               <Button
                    size="sm"    
                    icon="bx bx-cart"
                    aminte={true}
                >
                    chọn mua
                </Button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
   image01: PropTypes.string.isRequired,
   image02: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
   slug: PropTypes.string.isRequired
}

export default ProductCard
