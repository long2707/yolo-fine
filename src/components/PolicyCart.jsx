import React from 'react'
import PropTypes from 'prop-types'

const PolicyCart = props => {
    return (
      <div className="policy__card">
       <div className="policy__card__icon">
           <i className={props.icon}></i>
       </div>
       <div className="policy__card__info">
          <div className="policy__card__info__name">
              {props.name}
          </div>
          <div className="policy__card__info__description">
              {props.description};
          </div>
       </div>
      </div>
    )
}

PolicyCart.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,

}

export default PolicyCart
