import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

function App() {
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
    return 
   
  }


export default App;
