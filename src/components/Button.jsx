import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    const bg = props.backgroundColor ? 'bg-' + props.backgroundColor : 'bg-main';
    const size = props.size ? 'btn-' + props.size : '';
    const aminte = props.aminte ? 'btn-aminte' : '';
    return (
       <button
       className={`btn ${bg} ${size} ${aminte}`}
       onClick={props.onClick ? ()=> props.onClick() : null}
       >
          <span className="btn__txt">{props.children}</span>
          {
              props.icon ? (
                  <span className='btn__icon'>
                      <i className={`${props.icon} bx-tada`}> </i>
                  </span>
              ) : ''
          }
          </button>
    )
}

Button.propTypes = {
    backgroundColor: PropTypes.string,
    size: PropTypes.string,
    aminte: PropTypes.bool,
    icon: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
