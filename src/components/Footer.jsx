import React from 'react'

import logo from '../assets/images/Logo-2.png';
import Grid from './Grid';
import { Link } from 'react-router-dom';

const footerAboutLinks =[
    {
        display: 'Giới thiệu',
        path: '/about'
    },
    {
        display: 'Liên hệ',
        path: '/about'
    },
    {
        display: 'Tuyển dụng',
        path: '/about'
    },
    {
        display: 'Hệ thống cửa hàng',
        path: '/about'
    }
    
]

const footerCustomLinks=[
    {
        display: 'Chính sách đổi trả',
        path : '/about'
    },
    {
        display : 'Chính sách hoàn tiền',
        path : '/about'
    },
    {
        display: 'Chính sách bảo hành',
        path : '/about'
    }

]
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <Grid
                    col={4}
                    smCol={1}
                    mdCol={2}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Tổng đai hỗ trợ
                        </div>
                        <div className="footer__content">
                            <p>Liên hệ đặt hàng: <strong>012346838</strong></p>
                            <p>Thắc mắc đơn hàng: <strong>012346838</strong></p>
                            <p>Góp ý, ý kiến: <strong>012346838</strong></p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Về Yolo
                        </div>
                        <div className="footer__content">
                          {
                              footerAboutLinks.map((item, index) =>(
                                  <p key={index}>
                                      <Link to={item.path}>
                                      {item.display}
                                      </Link>
                                  </p>
                              ))
                          }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                           Các chính sách của Yolo
                        </div>
                        <div className="footer__content">
                          {
                              footerCustomLinks.map((item, index) =>(
                                  <p key={index}>
                                      <Link to={item.path}>
                                      {item.display}
                                      </Link>
                                  </p>
                              ))
                          }
                        </div>
                    </div>
                    <div className='footer__about'>
                        <p>
                            <Link to='/'>
                                <img src={logo} alt="" className='footer__logo' />
                            </Link>
                        </p>
                        <p>
                        Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động, tích cực hơn.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
