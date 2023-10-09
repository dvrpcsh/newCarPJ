import React from 'react'
import '../CSS/Header.css'
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className = "header">
            <img className="header_logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRndIM9XL2aOCxmGzKfM394HE8L6aT9wQtO8_Spz2xuTg&s' />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineTwo">모델</span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineTwo">구매/이벤트</span>
                </div>
                
                <div className="header_option">
                    <span className="header_optionLineTwo">서비스/멤버십</span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineTwo">디지털/고객지원</span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineTwo">브랜드</span>
                </div>

                <div className="header_option">
                    <Link to="/register">
                        <span className="header_optionLineTwo">등록</span>
                    </Link>
                </div>
            </div>

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <span class="material-icons">search</span>
                <span class="material-icons">person</span>
                <span class="material-icons">list</span>
            </div>

        </div>
    )
}

export default Header;