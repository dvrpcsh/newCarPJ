import React from 'react'
import '../CSS/Header.css'
// import { ShoppingBasket } from '@material-ui/icons';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import SvgIcon from "@mui/material/SvgIcon";
import { SvgIconComponent } from "@mui/icons-material";

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
                {/* <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                 </Stack> */}
            </div>

        </div>
    )
}

export default Header;