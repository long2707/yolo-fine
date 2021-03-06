import React, {useRef, useEffect} from 'react'
import logo from '../assets/images/Logo-2.png';

import { Link, useLocation } from 'react-router-dom';


const mainNav =[
    {
        display: 'Trang chủ',
        path: '/'
    },
    {
        display: 'Sản phẩm',
        path: '/catalog'
    },
    {
        display: 'Phụ kiện',
        path: '/accessories'
    },
    {
        display: "Liên hệ",
        path: '/contact'
    }
]


const Header = () => {
    const { pathname } =useLocation();
    
    const activeNav = mainNav.findIndex( e => e.path === pathname);
     const headeRef = useRef(null);
   
     useEffect(() => {
         window.addEventListener("scroll", ()=>{
             if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                 headeRef.current.classList.add('shrink');
             }
             else{
                 headeRef.current.classList.remove('shrink');
             }
         })
         return () => {
            window.removeEventListener("scroll");
         }
     }, []);
     const menuLeft = useRef(null);
     const menuActive = () => menuLeft.current.classList.toggle('active');
    return (
        <div className="header" ref={headeRef}>
            <div className="container">
                <div className="header__logo">
                   <Link to='/'>
                   <img src={logo} alt="" />
                   </Link>
                </div>
                <div className="header__menu">
                <div className="header__menu-toggle" onClick={menuActive}>
                            <i className='bx bx-menu-alt-left'></i>
                        </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left-close" onClick={menuActive}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        {
                        mainNav.map((item, index)=>(
                            <div key={index} className={`header__menu__item 
                            header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                            onClick={menuActive}>
                                <Link to={item.path}>
                                  <span>{item.display}</span>
                                </Link>
                            </div>
                        ))
                    }
                   </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <i className='bx bx-search' ></i>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link to='/cart'>
                                <i className='bx bx-shopping-bag' ></i>
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <i className='bx bx-user' ></i>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
    
    )
}

export default Header
