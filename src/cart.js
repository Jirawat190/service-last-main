// AddToCart.js

import React, { useState } from 'react';
import './cart.css'
import imagemenu from './Component/kaopad.jpg';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import Button from '@mui/material/Button';

const AddToCart = () => {
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  const addItemToCart = () => {
    if (selectedItem) {
      setCart([...cart, selectedItem]);
      setSelectedItem('');
    }
  };

  return (
    <div>
      <div class='bar'>
        <ArrowBackIosNewIcon />

        <span class='text'>
          รายการอาหารที่สั่ง
        </span>

        <span class='tablebar'>
          <TableRestaurantIcon className="table" />
          <span class='numbertable'>
            1
          </span>
          <NotificationsActiveIcon className="notification" />
        </span>

      </div>

      <div class='menuarea'>

        <ul>
          <img src={imagemenu} alt='imagemenu' class="imagemenu"></img>

          <div class="boxtext">
            <span class='textmenu'>ผัดกะเพรา</span>
            <span class='price'>99 ฿</span>
            <span class='comment'>
              <AssignmentIcon className="assignment" />
              <span class='commenttext'>
                หมู
              </span>
              <AssignmentIcon className="assignment" />
              <span class='commenttext'>
                ไข่ดาว
              </span>
            </span>
          </div>

          <div class='add'>
            <ControlPointIcon className="Controlpoint" />
            <span class='addtext'>
              1
            </span>
            <DoDisturbOnIcon className="Controlpoint" />
          </div>
        </ul>

        <ul>
          <img src={imagemenu} alt='imagemenu' class="imagemenu"></img>

          <div class="boxtext">
            <span class='textmenu'>ผัดกะเพรา</span>
            <span class='price'>99 ฿</span>
            <span class='comment'>
              <AssignmentIcon className="assignment" />
              <span class='commenttext'>
                หมู
              </span>
              <AssignmentIcon className="assignment" />
              <span class='commenttext'>
                ไข่ดาว
              </span>
            </span>
          </div>

          <div class='add'>
            <ControlPointIcon className="Controlpoint" />
            <span class='addtext'>
              1
            </span>
            <DoDisturbOnIcon className="Controlpoint" />
          </div>
        </ul>

        <ul>
          <img src={imagemenu} alt='imagemenu' class="imagemenu"></img>

          <div class="boxtext">
            <span class='textmenu'>ผัดกะเพรา</span>
            <span class='price'>99 ฿</span>
            <span class='comment'>
              <AssignmentIcon className="assignment" />
              <span class='commenttext'>
                หมู
              </span>
              <AssignmentIcon className="assignment" />
              <span class='commenttext'>
                ไข่ดาว
              </span>
            </span>
          </div>

          <div class='add'>
            <ControlPointIcon className="Controlpoint" />
            <span class='addtext'>
              1
            </span>
            <DoDisturbOnIcon className="Controlpoint" />
          </div>
        </ul>

        <ul>
          <img src={imagemenu} alt='imagemenu' class="imagemenu"></img>

          <div class="boxtext">
            <span class='textmenu'>ผัดกะเพรา</span>
            <span class='price'>99 ฿</span>
            <span class='comment'>
              <AssignmentIcon className="assignment" />
              <span class='commenttext'>
                หมู
              </span>
              <AssignmentIcon className="assignment" />
              <span class='commenttext'>
                ไข่ดาว
              </span>
            </span>
          </div>

          <div class='add'>
            <ControlPointIcon className="Controlpoint" />
            <span class='addtext'>
              1
            </span>
            <DoDisturbOnIcon className="Controlpoint" />
          </div>
        </ul>

        <ul>
          <img src={imagemenu} alt='imagemenu' class="imagemenu"></img>

          <div class="boxtext">
            <span class='textmenu'>ผัดกะเพรา</span>
            <span class='price'>99 ฿</span>
            <span class='comment'>
              <AssignmentIcon className="assignment" />
              <span class='commenttext'>
                หมู
              </span>
              <AssignmentIcon className="assignment" />
              <span class='commenttext'>
                ไข่ดาว
              </span>
            </span>
          </div>

          <div class='add'>
            <ControlPointIcon className="Controlpoint" />
            <span class='addtext'>
              1
            </span>
            <DoDisturbOnIcon className="Controlpoint" />
          </div>
        </ul>

        <ul>
          <img src={imagemenu} alt='imagemenu' class="imagemenu"></img>

          <div class="boxtext">
            <span class='textmenu'>ผัดกะเพรา</span>
            <span class='price'>99 ฿</span>
            <span class='comment'>
              <AssignmentIcon className="assignment" />
              <span class='commenttext'>
                หมู
              </span>
              <AssignmentIcon className="assignment" />
              <span class='commenttext'>
                ไข่ดาว
              </span>
            </span>
          </div>

          <div class='add'>
            <ControlPointIcon className="Controlpoint" />
            <span class='addtext'>
              1
            </span>
            <DoDisturbOnIcon className="Controlpoint" />
          </div>
        </ul>

        <ul>
          <img src={imagemenu} alt='imagemenu' class="imagemenu"></img>

          <div class="boxtext">
            <span class='textmenu'>ผัดกะเพรา</span>
            <span class='price'>99 ฿</span>
            <span class='comment'>
              <AssignmentIcon className="assignment" />
              <span class='commenttext'>
                หมู
              </span>
              <AssignmentIcon className="assignment" />
              <span class='commenttext'>
                ไข่ดาว
              </span>
            </span>
          </div>

          <div class='add'>
            <ControlPointIcon className="Controlpoint" />
            <span class='addtext'>
              1
            </span>
            <DoDisturbOnIcon className="Controlpoint" />
          </div>
        </ul>

        <ul>
          <img src={imagemenu} alt='imagemenu' class="imagemenu"></img>

          <div class="boxtext">
            <span class='textmenu'>ผัดกะเพรา</span>
            <span class='price'>99 ฿</span>
            <span class='comment'>
              <AssignmentIcon className="assignment" />
              <span class='commenttext'>
                หมู
              </span>
              <AssignmentIcon className="assignment" />
              <span class='commenttext'>
                ไข่ดาว
              </span>
            </span>
          </div>

          <div class='add'>
            <ControlPointIcon className="Controlpoint" />
            <span class='addtext'>
              1
            </span>
            <DoDisturbOnIcon className="Controlpoint" />
          </div>
        </ul>

        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>


      </div>

      <div class="summit">
        <div class ='boxsummit'>
          <span class='summittext'>
            4 รายการ
          </span>

          <span class='summitprice'>
            220 ฿
          </span>
        </div>

        <Button variant="contained">
          ยืนยันรายการสั่งอาหาร
        </Button>
      </div>

    </div>
  );
};

export default AddToCart;
