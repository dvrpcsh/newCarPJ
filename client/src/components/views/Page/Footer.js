import * as React from 'react';
import '../CSS/Footer.css';
import { useNavigate, Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function Footer() {
    const Introduce = () => {
        const navigate = useNavigate();
      
        const goToCarPage = () => {
          navigate("/CarPage");
        } 
    }

    return (
        <div className = "footer">
            <div className="footer_nav">
                <img className="footer_logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRndIM9XL2aOCxmGzKfM394HE8L6aT9wQtO8_Spz2xuTg&s' />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <div className="footer_option">
                    주저리주저리
                </div>
            </div>

            <div className='footer_nav2'>
            <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Stack>
            </div>
        </div>
    )
}

export default Footer;