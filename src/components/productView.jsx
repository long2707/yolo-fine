import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import numberWithCommas from '../utils/Numberwillcommas'



const ProductView = props => {
    const product =props.product

    const [preViewImg, setpreViewImg] = useState(product.image01)
      const [description, setdescription] = useState(false);
      const [color, setcolor] = useState(undefined);
      const [size, setsize] = useState(undefined);
   const [quantity, setquantity] = useState(1);
   const onSumquan = (type)=>{
       if(type ==='PLUS'){
           setquantity(quantity+1);
       }
       else{
           setquantity( quantity-1 <1 ? 1 : quantity-1);
       }
   }
   useEffect(() => {
    setpreViewImg(product.image01)
    setcolor(undefined);
       setsize(undefined)
       setquantity(1)
       }
   , [product])

   const check=  ()=>{
       if(color === undefined){
           alert('Bạn chưa chọn màu!');
           return false;
       }
       if(size === undefined){
        alert('Bạn chưa chọn size sản phẩm!');
        return false;
    }
    return true;
   }
   const addCart =()=>{
       if(check()){
           console.log(color, size, quantity, preViewImg)
       }
   }
      
    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item">
                        <img src={product.image01} alt="" onClick ={ () => setpreViewImg(product.image01)}/>
                    </div>
                    <div className="product__images__list__item">
                        <img src={product.image02} alt="" onClick = {() => setpreViewImg(product.image02)}/>
                    </div>
                </div>
                <div className="product__images__main">
                    <img src={preViewImg} alt="" />
                </div>
                <div className={`product__description ${description ? 'expant': ''}`}>
                    <div className="product__description__title">
                    Chi tiết sản phẩm
                    </div>
                    <div className="product__description__content" dangerouslySetInnerHTML={{__html : product.description}}>
                    
                    </div>
                    <div className="product__description__toggle">
                     <Button size='sm' onClick={()=> setdescription(!description)}
                         >
                             {description ? 'Thu gọn' : 'Xem Thêm'}

                     </Button>
                    </div>
                </div>
            </div>
           <div className="product__info">
       <h1 className="product__info__title">
           {product.title}
       </h1> 
       <div className="product__info__item">
         <span className="product__info__item__price">
             {numberWithCommas(product.price)}
         </span>
       </div>
       <div className="product__info__item">
          <div className="product__info__item__title">
              Màu sắc
          </div>
          <div className="product__info__item__list">
              {
                  product.colors.map((item, index)=>(
                      <div key={index} className={`product__info__item__list__item ${color ===item ? 'active' : ''}`} 
                      onClick={()=>setcolor(item)}>
                         <div className={`circlke bg-${item}`}></div>
                      </div>
                  ))
              }
          </div>
       </div>
       <div className="product__info__item">
          <div className="product__info__item__title">
              Kích cỡ
          </div>
          <div className="product__info__item__list">
              {
                  product.size.map((item, index)=>(
                    <div key={index} className={`product__info__item__list__item ${size ===item ? 'active' : ''}`}
                    onClick={()=> setsize(item)}>
                     <span>{item}</span>
                 </div>
                    
                  ))
              }
          </div>
       </div>
       <div className="product__info__item">
          <div className="product__info__item__title">
             Số lượng
          </div>
          <div className="product__info__item__quantity">
              <div className="product__info__item__quantity__btn"  onClick={()=> onSumquan('minus')}>
                  <i className="bx bx-minus"></i>
              </div>
              <div className="product__info__item__quantity__input">
                  {quantity}
              </div>
              <div className="product__info__item__quantity__btn" onClick={()=> onSumquan('PLUS')}>
                  <i className="bx bx-plus"></i>
              </div>
          </div>
       </div>
       <div className="product__info__item">
       <Button size='sm'  onClick={()=> addCart()} >
        Thêm vào giỏ hàng
       </Button>
       <Button size='sm' onClick={()=> addCart()}>
        Mua ngay
       </Button>
       </div>
           </div>
        </div>
    )
}

ProductView.propTypes = {
   product : PropTypes.object.isRequired
}

export default ProductView
