import React, { useState, useCallback, useEffect } from 'react'
import Helmet from '../components/Helmet'

import Section, { Sectionbody } from '../components/Section'
import productData from '../assets/fake-data/products'


import category from '../assets/fake-data/category'
import Checkbox from '../components/Checkbox'
import colors from '../assets/fake-data/product-color';
import size from '../assets/fake-data/product-size'
import Button from '../components/Button'
import InfinityList from '../components/InfinityList';
const Catalog = () => {
  const initiaFilter = {
    category: [],
    size: [],
    colors: []
  }
  const productList = productData.getAllProducts();
  const [products, setproducts] = useState(productList)

  const [filter, setfilter] = useState(initiaFilter)


  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case 'CATAGORY':
          setfilter({ ...filter, category: [...filter.category, item.categorySlug] })
          break;

        case 'COLORS':
          setfilter({ ...filter, colors: [...filter.colors, item.color] })
          break;

        case 'SIZE':
          setfilter({ ...filter, size: [...filter.size, item.size] })
          break;
        default:

      }
    }
    else {
      switch (type) {
        case 'CATAGORY':
          const newCatagory = filter.category.filter(e => e !== item.categorySlug)
          setfilter({ ...filter, category: newCatagory })
          break;

        case 'COLORS':
          const newColor = filter.colors.filter(e => e !== item.color)
          setfilter({ ...filter, colors: newColor })
          break;

        case 'SIZE':
          const newSize = filter.size.filter(e => e !== item.size)
          setfilter({ ...filter, category: newSize })
          break;
        default:

      }
    }
  }

  const clearFilter =() => setfilter(initiaFilter)
  const updateProduct = useCallback(
    () => {
      let temp = productList
      if (filter.category.length > 0) {
        temp = temp.filter(e => filter.category.includes(e.categorySlug))
      }

      if (filter.colors.length > 0) {
        temp = temp.filter(e => {
          const check = e.colors.find(color => filter.colors.includes(color))
          return check !== undefined
        })
      }

      if (filter.size.length > 0) {
        temp = temp.filter(e => {
          const check = e.size.find(size => filter.size.includes(size))
          return check !== undefined
        })
      }
      setproducts(temp)


    },
    [filter, setproducts, productList],
  )

  useEffect(() => {
    updateProduct()
  }, [updateProduct])
  return (
    <Helmet title='Sản phẩm'>

      <div className="catalog">
        <div className="catalog__fitler">
          <div className="catalog__fitler__widget">
            <div className="catalog__fitler__widget__title">
              Danh mục sản phẩm
            </div>
            <div className="catalog__fitler__widget__content">
              {category.map((item, index) => (
                <div className='catalog__fitler__widget__content__item' key={index}>
                  <Checkbox
                    label={item.display}
                    onChange={(input) => filterSelect("CATAGORY", input.checked, item)}
                  checked ={filter.category.includes(item.categorySlug)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__fitler__widget">
            <div className="catalog__fitler__widget__title" >
              Màu sắc
            </div>
            <div className="catalog__fitler__widget__content">
              {colors.map((item, index) => (
                <div key={index} className='catalog__fitler__widget__content__item'>
                  <Checkbox
                    label={item.display}
                    onChange={(input) => filterSelect("COLORS", input.checked, item)} 
                    checked ={filter.colors.includes(item.color)}/>
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__fitler__widget">
            <div className="catalog__fitler__widget__title">
              size
            </div>
            <div className="catalog__fitler__widget__content">
              {size.map((item, index) => (
                <div key={index} className='catalog__fitler__widget__content__item'>
                  <Checkbox label={item.display}
                    onChange={(input) => filterSelect("SIZE", input.checked, item)}
                    checked ={filter.size.includes(item.size)} />
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__fitler__widget">
            <div className="catalog__fitler__widget__title">
              <Button size='sm' onClick={clearFilter}> Xóa bộ lọc </Button>
            </div>
          </div>

        </div>

        <div className="catalog__content">

          <Section>
            <Sectionbody>
              <InfinityList  data ={products}/>
            </Sectionbody>
          </Section>
        </div>
      </div>
    </Helmet>
  )
}

export default Catalog
