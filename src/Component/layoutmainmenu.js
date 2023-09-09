import * as React from 'react';
import Box from '@mui/material/Box';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import '../Menu/Menu.css'
import Imagebanber from './logobander.png';
import Imagetable from '../image/table.png';
import Imagecart from '../image/cart.png'
import Imagescheak from '../image/cilpboard.png'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


  

const defaultTheme = createTheme();


export default function Album() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then(res => res.json())
      .then(
        (result) => {
          setMenu(result);
        },
      )
  }, [])

  const [value, setValue] = React.useState(0)

  const navigate = useNavigate();

  return (
    <div>
      <header>
        <div class="table">
          <img src={Imagetable} style={{ width: '100%', marginBottom: '25px', marginTop: '15px', display: 'block' }}></img>
          <div class='texttable'>1</div>
        </div>

        <div class="bg">
          <img src={Imagebanber} alt='Imagebander' className='Imageban'></img>
        </div>

        <div class="notification">
          <Link to="/menu/cart" style={{ textDecoration: 'none', color: '#ffffff' }}><img src={Imagecart} alt='Imagecart' class="Imagecart"></img></Link>
          <img src={Imagescheak} alt='Imagecheak' class="Imagecheak"></img>
        </div>
      </header>

      <div class="group">
        <Box class="groupfive">
          <BottomNavigation
            sx={{ backgroundColor: "orange" }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
           
            <BottomNavigationAction onClick={() => navigate("/menu/promotion")} label="Promotion" />
            <BottomNavigationAction onClick={() => navigate("/menu/dessert")} label="ของคาว" />
            <BottomNavigationAction onClick={() => navigate("/menu/dishmenu")} label="ของหวาน" />
            <BottomNavigationAction onClick={() => navigate("/menu/snacksmenu")} label="ทานเล่น" />
            <BottomNavigationAction onClick={() => navigate("/menu/drinkmenu")} label="เครื่องดื่ม" />
          </BottomNavigation>
        </Box>
      </div>
    </div>

  );
}

