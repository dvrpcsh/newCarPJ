import React from "react";
import '../CSS/Main.css';
import mainIMG from '../image/carTypicalPh/avante/avanteN/the-new-avante-n-23pe-w.png';
import Button from '@mui/material/Button';
import { LeftSquareFilled, RightSquareFilled } from "@ant-design/icons"

function MainPage() {
  return (
    <div>
      {/* 메인 섹션 */}
      <div className="home_div">
        <div className="home_button"><LeftSquareFilled /></div>
        
          <div>
            <div className="home_main_text">
              <h1>New AvanteN</h1>
            </div>
              <img className="home_image" src={mainIMG} />
            </div>
        
        <div className="home_button"><RightSquareFilled /></div>
      </div>

      {/* midle 섹션 */}
      <div className="home_surveDiv1">

      </div>
    </div>

    
  )
}

export default MainPage;
