import React, { useEffect, useState } from 'react';
import './MainPage.css';
import './Responsivecss.css';
import '../Mejiwoo/loader.css';
import axios from 'axios';
import logo1 from '../Images/logo.png'
import image3 from '../Images/Frame 13.png'
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
// import { BsFillSuitDiamondFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { HiMiniArrowUturnRight } from "react-icons/hi2";
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, Card, Tabs, Tab, CardBody, CardImg, Carousel } from 'react-bootstrap'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link, Outlet } from 'react-router-dom';
import baseUrl from '../baseurl';


function MainPage() {

    useEffect(() => {
        MainImage1();
        MainImage2();
        MainImage3();
        MainImage4();
        MainImage5();
        MainImage6();
        MainImage7();
        MainImage8();
        MainImage9();
        MainImage10();
        MainImage11();
        MainImage12();
        MainImage13();
        MainImage14();
        MainImage15();
        MainImage16();
        MainImage17();
        MainImage18();
        MainImage19();
        MainImage20();
        MainImage21();
        MainImage22();
        MainImage23();
        MainImage24();
        MainImage25();
        MainImage26();
        MainImage27();


    }, []);


    const [getimg1, setgetimg1] = useState('');
    const [getimg2, setgetimg2] = useState('');
    const [getimg3, setgetimg3] = useState('');
    const [getimg4, setgetimg4] = useState('');
    const [getimg5, setgetimg5] = useState('');
    const [getimg6, setgetimg6] = useState('');
    const [getimg7, setgetimg7] = useState('');
    const [getimg8, setgetimg8] = useState('');
    const [getimg9, setgetimg9] = useState('');
    const [getimg10, setgetimg10] = useState('');
    const [getimg11, setgetimg11] = useState('');
    const [getimg12, setgetimg12] = useState('');
    const [getimg13, setgetimg13] = useState('');

    // tabs image
    const [getimg14, setgetimg14] = useState('');
    const [getimg15, setgetimg15] = useState('');
    const [getimg16, setgetimg16] = useState('');
    const [getimg17, setgetimg17] = useState('');
    const [getimg18, setgetimg18] = useState('');
    const [getimg19, setgetimg19] = useState('');

    // our featuerd collection 
    const [getimg20, setgetimg20] = useState('');
    const [getimg21, setgetimg21] = useState('');
    const [getimg22, setgetimg22] = useState('');
    const [getimg23, setgetimg23] = useState('');
    const [getimg24, setgetimg24] = useState('');

    const [getimg25, setgetimg25] = useState('');
    const [getimg26, setgetimg26] = useState('');
    const [getimg27, setgetimg27] = useState('');




    const [loader, setloader] = useState('false');
    const [curmode, setcurmode] = useState("submit")


    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        setIsOpen(true);
    };

    const closeNav = () => {
        setIsOpen(false);
    };

    const MainImage1 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image1/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[0]?.singleImage;
                    setgetimg1(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(true)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[0]?.singleImage;
                setgetimg1(ImageData)
            } catch (error) {
                console.log(error)
            }
        }

    }

    const MainImage2 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image2/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[1]?.singleImage;
                    setgetimg2(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[1]?.singleImage;
                setgetimg2(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    const MainImage3 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image3/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[2]?.singleImage;
                    setgetimg3(imageData)

                }
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[2]?.singleImage;
                setgetimg3(ImageData)
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        }
    };

    const MainImage4 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image4/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[3]?.singleImage;
                    setgetimg4(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[3]?.singleImage;
                setgetimg4(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    const MainImage5 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image5/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[4]?.singleImage;
                    setgetimg5(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[4]?.singleImage;
                setgetimg5(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    const MainImage6 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image6/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[5]?.singleImage;
                    setgetimg6(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[5]?.singleImage;
                setgetimg6(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    const MainImage7 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get('${baseUrl}/get/image7/show')
                if (res.status === 200) {
                    const imageData = res.data.data[6]?.singleImage;
                    setgetimg7(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[6]?.singleImage;
                setgetimg7(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    const MainImage8 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image8/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[7]?.singleImage;
                    setgetimg8(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[7]?.singleImage;
                setgetimg8(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    const MainImage9 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image9/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[8]?.singleImage;
                    setgetimg9(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[8]?.singleImage;
                setgetimg9(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };


    const MainImage10 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image10/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[9]?.singleImage;
                    setgetimg10(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[9]?.singleImage;
                setgetimg10(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    const MainImage11 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image11/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[10]?.singleImage;
                    setgetimg11(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[10]?.singleImage;
                setgetimg11(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    const MainImage12 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image12/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[11]?.singleImage;
                    setgetimg12(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[11]?.singleImage;
                setgetimg12(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };


    const MainImage13 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image13/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[12]?.singleImage;
                    setgetimg13(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[12]?.singleImage;
                setgetimg13(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    // TABS IMAGES 
    const MainImage14 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image14/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[13]?.singleImage;
                    setgetimg14(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[13]?.singleImage;
                setgetimg14(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    const MainImage15 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image15/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[14]?.singleImage;
                    setgetimg15(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[14]?.singleImage;
                setgetimg15(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    const MainImage16 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image16/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[15]?.singleImage;
                    setgetimg16(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[15]?.singleImage;
                setgetimg16(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };
    const MainImage17 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image17/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[16]?.singleImage;
                    setgetimg17(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[16]?.singleImage;
                setgetimg17(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    const MainImage18 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image18/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[17]?.singleImage;
                    setgetimg18(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[17]?.singleImage;
                setgetimg18(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    const MainImage19 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image19/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[18]?.singleImage;
                    setgetimg19(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[18]?.singleImage;
                setgetimg19(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    // OUR FEAUTERD COLLECTION 

    const MainImage20 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image20/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[19]?.singleImage;
                    setgetimg20(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[19]?.singleImage;
                setgetimg20(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    const MainImage21 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image21/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[20]?.singleImage;
                    setgetimg21(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[20]?.singleImage;
                setgetimg21(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    const MainImage22 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image22/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[21]?.singleImage;
                    setgetimg22(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[21]?.singleImage;
                setgetimg22(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    const MainImage23 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image23/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[22]?.singleImage;
                    setgetimg23(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[22]?.singleImage;
                setgetimg23(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    const MainImage24 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image24/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[23]?.singleImage;
                    setgetimg24(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[23]?.singleImage;
                setgetimg24(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };


    const MainImage25 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image25/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[24]?.singleImage;
                    setgetimg25(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[24]?.singleImage;
                setgetimg25(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };

    const MainImage26 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image26/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[25]?.singleImage;
                    setgetimg26(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[25]?.singleImage;
                setgetimg26(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };


    const MainImage27 = async (userId) => {
        setloader(true)
        if (curmode === "submit") {
            try {
                var res = await axios.get(`${baseUrl}/get/image27/show`)
                if (res.status === 200) {
                    const imageData = res.data.data[26]?.singleImage;
                    setgetimg27(imageData)

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloader(false)
            }
        } else {
            try {
                var res = await axios.put(`${baseUrl}/image/data/updated/${userId}`)
                const ImageData = res.data.data[26]?.singleImage;
                setgetimg27(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
    };





    return (
        <>

            {
                loader && (

                    <div class="dot-spinner">
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                    </div>
                )
            }
            <Navbar expand="lg" bg="light" variant="light" className="fixed-top">
                <Container>
                    {/* Left-aligned Navigation Links */}
                    <div id='header-hidden'>

                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#product">Product</Nav.Link>
                            <Nav.Link href="#categories">Categories</Nav.Link>
                            <Nav.Link href="#sale">SALE</Nav.Link>
                        </Nav>
                    </div>

                    {/* Centered Logo */}
                    <Navbar.Brand className="justify-content-center" id='logo'>
                        <img src={logo1} alt="Logo" className="d-inline-block align-top" style={{ height: '40px' }} />
                    </Navbar.Brand>

                    {/* Right-aligned Search Bar */}
                    <Form id='serchbar'>
                        <FormControl type="search" placeholder="Search" />
                        <CiSearch />
                    </Form>
                    <div id='bag'><IoBagHandleOutline /></div>
                    <div><FaUser /></div>
                </Container>
            </Navbar>

            <div id='toggle-menu'>
                <h1>Menu</h1>
                <div>
                    <div className={`overlay ${isOpen ? "open" : ""}`}>
                        <button className="closebtn" onClick={closeNav}>
                            &times;
                        </button>
                        <div className="overlay-content">
                            <a href="#">Home</a>
                            <a href="#product">Product</a>
                            <a href="#">Category</a>
                            <a href="#">Sale</a>
                        </div>
                    </div>


                    <span id='menu-btn' style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav} >
                        &#9776;
                    </span>
                </div>
            </div>

            <div id='home'>
                <div id='bottom-div'>
                    <Container>
                        <Row md={12}>
                            <Col md={2} >
                                <div className="item">
                                    <img src={getimg1} alt="Fashion 1" className="img-fluid" />
                                    {/* <p>Fashion Item 1 Description</p> */}
                                </div>
                            </Col>
                            <Col md={2} >
                                <div className="item">
                                    <img src={getimg2} alt="Fashion 2" className="img" />
                                    {/* <p>Fashion Item 2 Description</p> */}
                                </div>
                            </Col>

                            <Col col={4} className='text-center' id='bottm-text'>

                                <div id='textcenter'>
                                    <img src={image3}></img>
                                    <hr id='hr'></hr>
                                    <p id='p1'>make your everyday look prettier
                                        <br></br>
                                        with MEJIWOO Korean Made</p>
                                </div>

                            </Col>

                            <Col md={2}>
                                <div className="item">
                                    <img src={getimg3} alt="Fashion 3" className="img-fluid" />
                                    {/* <p>Fashion Item 3 Description</p> */}
                                </div>
                            </Col>
                            <Col md={2} >
                                <div className="item">
                                    <img src={getimg4} alt="Fashion 4" className="img" />
                                    {/* <p>Fashion Item 4 Description</p> */}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div>
                <h1 id='h1' > Season Collection</h1>
            </div>

            <div id='product'>
                <div id='in-bottom-div' >
                    <Container>

                        <Row md={12}>
                            <Col md={4}>
                                <Card id='card'>
                                    <Card.Img src={getimg5} />
                                    <Card.Body>
                                        <Card.Text>
                                            SPRING
                                        </Card.Text>
                                        <Button id='btn-more'>More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4}>
                                <Card id='card' >
                                    <Card.Img src={getimg6} />
                                    <Card.Body>
                                        <Card.Text>
                                            SUMMER
                                        </Card.Text>
                                        <Button id='btn-more'>More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col>
                                <Card id='card'>

                                    <Card.Img src={getimg7} />
                                    <Card.Body>
                                        <Card.Text>
                                            WINTER
                                        </Card.Text>
                                        <Button id='btn-more'>More</Button>
                                    </Card.Body>

                                </Card>
                            </Col>


                        </Row>
                    </Container>

                </div>

                <div id='in-bottom-div'>
                    <Container>
                        <Row md={12}>
                            <Col md={4}>
                                <Card id='card' >
                                    <Card.Img src={getimg8} />
                                    <Card.Body>
                                        <Card.Text>
                                            Euphoria Crop Blouse
                                        </Card.Text>
                                        <Card.Text id='rp'>Rp. 125.000</Card.Text>
                                        <Button id='btn-more'>More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card id='card' >
                                    <Card.Img src={getimg9} />
                                    <Card.Body>
                                        <Card.Text>
                                            Venus Halter Dress
                                        </Card.Text>
                                        <Card.Text id='rp'>Rp. 128.000</Card.Text>
                                        <Button id='btn-more'>More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card id='card' >
                                    <Card.Img src={getimg10} />
                                    <Card.Body>
                                        <Card.Text>
                                            Snap Pure Blouse
                                        </Card.Text>
                                        <Card.Text id='rp'>Rp. 129.000</Card.Text>
                                        <Button id='btn-more'>More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div id='sale'>
                <div id='bottom-div-2'  >
                    <Container>
                        <Row className='align-items-center'>
                            <Col md={2}>
                                <div className='item'>
                                    <Card.Img src={getimg11}></Card.Img>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className='item'>
                                    <Card.Img src={getimg12}></Card.Img>
                                </div>
                            </Col>
                            <Col md={3}>
                                <Card.Body className='text-center' id='bottm-text'>
                                    <div className='textcenter'>
                                        <Card.Text>
                                            <h2>Get 50% Off</h2>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>for all new product purchases
                                                min. purchase Rp. 350.000</p>
                                        </Card.Text>
                                        <Button id='btn-more2'>
                                            Shop Now
                                        </Button>
                                    </div>

                                </Card.Body>
                            </Col>

                            <Col md={5}>
                                <div className='item'>
                                    <Card.Img src={getimg13}></Card.Img>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div id='third-column' >
                <h1 id='h1'>Our Products</h1>
            </div>

            {/* Tabs */}
            <div id='categories'>
                <Container fluid className="header-container">
                    {/* <Row> */}
                    <div className="d-flex flex-column align-items-center custom-tabs">
                        <Tabs id="tabs">
                            <Tab eventKey="Top" title="Top">
                                <div id='tabs-in'>

                                    <Container>
                                        <Row md={12}>

                                            <Col sm={4}>
                                                <Card.Img src={getimg14} alt='image14'></Card.Img>
                                                <CardBody id='cardbody'>
                                                    <Card.Text>
                                                        Eto V NEck Yellow
                                                    </Card.Text>
                                                    <Card.Text>
                                                        Rp. 129.000
                                                    </Card.Text>
                                                </CardBody>
                                            </Col>
                                            <Col sm={4}>
                                                <Card.Img src={getimg15} alt='image14'></Card.Img>
                                                <CardBody id='cardbody'>
                                                    <Card.Text>
                                                        Macaroon Dry Half
                                                    </Card.Text>
                                                    <Card.Text>
                                                        Rp. 139.000
                                                    </Card.Text>
                                                </CardBody>
                                            </Col>
                                            <Col sm={4}>
                                                <Card.Img src={getimg16} alt='image14'></Card.Img>
                                                <CardBody id='cardbody'>
                                                    <Card.Text>
                                                        Wave Stripe Hally
                                                    </Card.Text>
                                                    <Card.Text>
                                                        Rp. 130.000
                                                    </Card.Text>
                                                </CardBody>
                                            </Col>
                                        </Row>

                                        <Row md={12} id='row-tabs'>

                                            <Col sm={4}>
                                                <Card.Img src={getimg17} alt='image14'></Card.Img>
                                                <CardBody id='cardbody'>
                                                    <Card.Text>
                                                        Eve Punching Flora
                                                    </Card.Text>
                                                    <Card.Text>
                                                        Rp. 229.000
                                                    </Card.Text>
                                                </CardBody>
                                            </Col>
                                            <Col sm={4}>
                                                <Card.Img src={getimg18} alt='image14'></Card.Img>
                                                <CardBody id='cardbody'>
                                                    <Card.Text>
                                                        Floral Waffle Tee
                                                    </Card.Text>
                                                    <Card.Text>
                                                        Rp. 119.000
                                                    </Card.Text>
                                                </CardBody>
                                            </Col>
                                            <Col sm={4}>
                                                <Card.Img src={getimg19} alt='image14'></Card.Img>
                                                <CardBody id='cardbody'>
                                                    <Card.Text>
                                                        Snap Pure Blouse
                                                    </Card.Text>
                                                    <Card.Text>
                                                        Rp. 225.000
                                                    </Card.Text>
                                                </CardBody>
                                            </Col>
                                        </Row>
                                        <Button id='btn-more3'>SEE MORE<FaArrowRight /></Button>
                                    </Container>
                                </div>
                            </Tab>


                            {/* <Tab eventKey="Bottom" title="Bottom">
                                Tab content for Profile
                            </Tab>
                            <Tab eventKey="Dress" title="Dress">
                                Tab content for Profile
                            </Tab>
                            <Tab eventKey="Sit" title="Sit">
                                Tab content for Profile
                            </Tab>
                            <Tab eventKey="Knit" title="Knit">
                                Tab content for Profile
                            </Tab>
                            <Tab eventKey="Outer" title="Outer">
                                Tab content for Profile
                            </Tab> */}
                        </Tabs>
                    </div>
                    {/* </Row> */}
                </Container>
            </div>

            <h1 id='h1'>Our Featured Collection</h1>

            <div>
                <Container>
                    <div>
                        <Row md={12}>
                            <Col xs={6} md={4}>
                                <CardBody id='card-img1'>
                                    <div id='zindex'>

                                        <Card.Img id='smart-img' src={getimg20} alt='smart img 1'></Card.Img>
                                        <h4 id='img-in-text'>COLORFUL KNITWEAR
                                            <br></br>
                                            SERIES
                                        </h4>
                                        <span id='arrow'><HiMiniArrowUturnRight /></span>
                                    </div>
                                    <div id='zindex'>
                                        <Card.Img src={getimg23} alt='smart img 1'></Card.Img>
                                        <h4 id='img-in-text'>TOP PANTS
                                            <br></br>
                                            SERIES
                                        </h4>
                                        <span id='arrow2'><HiMiniArrowUturnRight /></span>
                                    </div>
                                </CardBody>
                            </Col>

                            <Col xs={6} md={4}>
                                <CardBody id='card-img1'>
                                    <div id='zindex'>
                                        <Card.Img id='midle-img' src={getimg21} alt='smart img 2'></Card.Img>
                                        <h4 id='img-in-text1'>JIWOO MADE SPECIAL
                                            <br></br>
                                            SERIES
                                        </h4>
                                        <span id='arrow3'><HiMiniArrowUturnRight /></span>
                                    </div>
                                </CardBody>
                            </Col>

                            <Col xs={6} md={4}>
                                <CardBody id='card-img1'>
                                    <div id='zindex'>
                                        <Card.Img id='smart-img' src={getimg22} alt='smart img 3'></Card.Img>
                                        <h4 id='img-in-text'>FRESHIDER TOP
                                            <br></br>
                                            SERIES
                                        </h4>
                                        <span id='arrow'><HiMiniArrowUturnRight /></span>
                                    </div>

                                    <div id='zindex'>
                                        <Card.Img src={getimg24} alt='smart img 3'></Card.Img>
                                        <h4 id='img-in-text'>SWEET DRESSES
                                            <br></br>
                                            SERIES
                                        </h4>
                                        <span id='arrow2'><HiMiniArrowUturnRight /></span>
                                    </div>

                                </CardBody>
                            </Col>

                        </Row>
                    </div>
                </Container >
            </div >

            <h1 id='h1'>What They Said</h1>

            <Container>
                <div >
                    <Row md={12}>

                        <Col md={4} xs={6}>

                            {/* <Carousel.Item> */}
                            <CardBody id='card-body'>
                                <CardImg src={getimg25} alt='not found'></CardImg>
                                <Card.Text id='card-text'>
                                    <div id='div-center'>

                                        <p>Essence Long Denim</p>
                                        <span>
                                            <Stack id='rating' spacing={1}>
                                                <Rating name="half-rating" defaultValue={5} precision={5} />
                                            </Stack>

                                        </span>
                                        <p>-Lisa-</p>
                                    </div>
                                    <span>“I like this pants. Its fit and perfect for me. The material is so comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”</span>
                                </Card.Text>
                            </CardBody>
                            {/* </Carousel.Item> */}

                        </Col>
                        <Col md={4} xs={6}>
                            <CardBody id='card-body'>
                                <CardImg src={getimg26} alt='not found'></CardImg>
                                <Card.Text>
                                    <div id='div-center'>

                                        <p>Andcable Knit Top</p>
                                        <span>
                                            <Stack id='rating' spacing={1}>
                                                <Rating name="half-rating" defaultValue={5} precision={5} />
                                            </Stack>

                                        </span>
                                        <p>-Celine-</p>
                                    </div>
                                    <span>I like knitted materials.
                                        I bought this shirt because the design is very pretty and comfortable to wear casually.
                                        The material is also neat and good.
                                        I love shopping here, and I'll be a frequent customer at this store.
                                    </span>
                                </Card.Text>
                            </CardBody>

                        </Col>
                        <Col md={4} xs={6}>
                            <CardBody id='card-body'>
                                <CardImg src={getimg27} alt='not found'></CardImg>
                                <Card.Text id='card-text'>
                                    <div id='div-center'>

                                        <p>Candy Stripe Boxy</p>
                                        <span>
                                            <Stack id='rating' spacing={1}>
                                                <Rating name="half-rating" defaultValue={5} precision={5} />
                                            </Stack>

                                        </span>
                                        <p>-Tiffany-</p>
                                    </div>
                                    <span>“This shirt is very pretty and nice. The color is cute too. At first I bought it as a present for my friend but I also wanted it so we ended up going out wearing twin clothes haha.”</span>
                                </Card.Text>
                            </CardBody>
                        </Col>
                    </Row>
                </div>


            </Container>

            <Container>
                <div id='last-div'>

                    <Row md={12}>
                        <Col md={6}>
                            <div id='border'>
                                <h1>Get more benefits by sing Up & Join Mejiwoo Community! </h1>
                                <ul>
                                    <li id='li'><b>FREE Special Gift to a new member</b></li>
                                    <li id='li'><b>Get 2x JIWOO Points to purchase items</b></li>
                                    <li id='li'><b>Get special voucher code every month</b> </li>
                                    <li id='li'><b>Claim Voucher Disc. Up To 50% </b></li>
                                </ul>
                            </div>
                        </Col>
                        {/* <span id='border'></span> */}
                        <Col md={6}>
                            <Form id='form'>
                                <Form.Label>Full Name</Form.Label>
                                <FormControl type='text' name='name' placeholder='Name'></FormControl>
                                <Form.Label>Email</Form.Label>
                                <FormControl type='text' name='Email' placeholder='Email'></FormControl>
                                <Form.Label>Password</Form.Label>
                                <FormControl type='text' name='Password' placeholder='Password'></FormControl>

                                {/* <FormControl type='checkbox'></FormControl> */}
                            </Form>
                            <br></br>
                            <div class="checkbox-item">
                                <input type="checkbox" id="agree2" name="agree2" required />
                                <label for="agree2"> I agree to all the <b>Terms</b> and <b>Privacy Policy</b></label>
                            </div>
                            <Button id='singup'> SING UP</Button>

                            <div id='link-div'>
                                <div id='flex-div'>

                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.0338 20.4106 18.2644 22.5 15 22.5C10.8581 22.5 7.5 19.1419 7.5 15C7.5 10.8581 10.8581 7.5 15 7.5C16.9119 7.5 18.6513 8.22125 19.9756 9.39937L23.5112 5.86375C21.2787 3.78312 18.2925 2.5 15 2.5C8.09688 2.5 2.5 8.09688 2.5 15C2.5 21.9031 8.09688 27.5 15 27.5C21.9031 27.5 27.5 21.9031 27.5 15C27.5 14.1619 27.4137 13.3438 27.2569 12.5519Z" fill="#FFC107" />
                                        <path d="M3.94125 9.18188L8.04813 12.1938C9.15938 9.4425 11.8506 7.5 15 7.5C16.9119 7.5 18.6513 8.22125 19.9756 9.39937L23.5113 5.86375C21.2788 3.78312 18.2925 2.5 15 2.5C10.1988 2.5 6.035 5.21062 3.94125 9.18188Z" fill="#FF3D00" />
                                        <path d="M15 27.4999C18.2288 27.4999 21.1625 26.2643 23.3806 24.2549L19.5119 20.9812C18.2147 21.9677 16.6297 22.5012 15 22.4999C11.7488 22.4999 8.98814 20.4268 7.94814 17.5337L3.87189 20.6743C5.94064 24.7224 10.1419 27.4999 15 27.4999Z" fill="#4CAF50" />
                                        <path d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.5714 18.8853 20.6833 20.0957 19.51 20.9819L19.5119 20.9806L23.3806 24.2544C23.1069 24.5031 27.5 21.25 27.5 15C27.5 14.1619 27.4137 13.3438 27.2569 12.5519Z" fill="#1976D2" />
                                    </svg>
                                    <p> <a id='facebook' href='/singup'>SIGN UP WITH GOOGLE</a></p>
                                </div>

                                <div id='flex-div'>

                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_283_232)">
                                            <path d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71566 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.3219 5.85938C19.9631 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9248 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z" fill="#1877F2" />
                                            <path d="M20.8389 19.3359L21.5039 15H17.3438V12.1863C17.3438 10.9999 17.9249 9.84375 19.7883 9.84375H21.6797V6.15234C21.6797 6.15234 19.9631 5.85938 18.3219 5.85938C14.8957 5.85938 12.6562 7.93594 12.6562 11.6953V15H8.84766V19.3359H12.6562V29.8178C13.4316 29.9393 14.2152 30.0002 15 30C15.7848 30.0002 16.5684 29.9393 17.3438 29.8178V19.3359H20.8389Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_283_232">
                                                <rect width="30" height="30" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p> <a id='facebook' href='/facebook'>SIGN UP WITH FACEBOOK</a> </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container >

            <div id='footer-up'>
                <Container>
                    <Row md={12}>
                        <Col md={2} id='logo2'>

                            <CardImg src={image3}></CardImg>

                        </Col>

                        <Col md={2}>
                            <Card.Text>
                                <div id='about'>
                                    <b>About Us</b>
                                    <div id='about-in'>
                                        <p>New </p>
                                        <p>Official Store </p>
                                        <p>Company </p>
                                        <p>Carees</p>
                                    </div>

                                </div>
                            </Card.Text>
                        </Col>

                        <Col md={2}>
                            <Card.Text>
                                <div>

                                    <b id='bold'>Get Help</b>

                                    <div id='about-in'>

                                        <p>FAQ </p>
                                        <p>Shiping </p>
                                        <p>Payment </p>
                                        <p>Return</p>
                                        <p>Contact Us</p>
                                    </div>


                                </div>
                            </Card.Text>
                        </Col>

                        <Col md={2}>
                            <div id='social'>


                                <b>Follow Us</b>

                                <div id='social-main'>


                                    <div id='fcbk'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_283_229)">
                                                <path d="M20 10C20 4.47719 15.5228 0 10 0C4.47719 0 0 4.47711 0 10C0 14.9913 3.65687 19.1284 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3088 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.9498 6.5625 11.5625 7.33336 11.5625 8.12422V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3431 19.1284 20 14.9913 20 10Z" fill="#1877F2" />
                                                <path d="M13.8926 12.8906L14.3359 10H11.5625V8.12422C11.5625 7.33328 11.9499 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.95439 19.9595 9.4768 20.0001 10 20C10.5232 20.0002 11.0456 19.9595 11.5625 19.8785V12.8906H13.8926Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_283_229">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </div>

                                    <div id='insta'>

                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_283_37)">
                                                <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="url(#paint0_radial_283_37)" />
                                                <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="url(#paint1_radial_283_37)" />
                                                <path d="M10.0007 2.1875C7.87898 2.1875 7.61266 2.1968 6.77938 2.23469C5.94766 2.27281 5.37992 2.40445 4.8832 2.59766C4.3693 2.79719 3.93344 3.06414 3.49922 3.49852C3.06461 3.93281 2.79766 4.36867 2.5975 4.88234C2.40375 5.37922 2.27195 5.94719 2.23453 6.77852C2.19727 7.61188 2.1875 7.87828 2.1875 10.0001C2.1875 12.1219 2.19688 12.3873 2.23469 13.2206C2.27297 14.0523 2.40461 14.6201 2.59766 15.1168C2.79734 15.6307 3.0643 16.0666 3.49867 16.5008C3.93281 16.9354 4.36867 17.203 4.88219 17.4025C5.3793 17.5957 5.94711 17.7273 6.77867 17.7655C7.61203 17.8034 7.87813 17.8127 9.99977 17.8127C12.1217 17.8127 12.3872 17.8034 13.2205 17.7655C14.0522 17.7273 14.6205 17.5957 15.1177 17.4025C15.6313 17.203 16.0666 16.9354 16.5006 16.5008C16.9352 16.0666 17.2021 15.6307 17.4023 15.117C17.5944 14.6201 17.7262 14.0522 17.7653 13.2208C17.8027 12.3875 17.8125 12.1219 17.8125 10.0001C17.8125 7.87828 17.8027 7.61203 17.7653 6.77867C17.7262 5.94695 17.5944 5.3793 17.4023 4.88258C17.2021 4.36867 16.9352 3.93281 16.5006 3.49852C16.0661 3.06398 15.6315 2.79703 15.1172 2.59773C14.6191 2.40445 14.0511 2.27273 13.2194 2.23469C12.386 2.1968 12.1207 2.1875 9.99828 2.1875H10.0007ZM9.29984 3.59539C9.50789 3.59508 9.74 3.59539 10.0007 3.59539C12.0867 3.59539 12.3339 3.60289 13.1577 3.64031C13.9194 3.67516 14.3328 3.80242 14.6082 3.90938C14.9728 4.05094 15.2327 4.22023 15.506 4.49375C15.7795 4.76719 15.9487 5.02758 16.0906 5.39219C16.1976 5.66719 16.325 6.08063 16.3597 6.84234C16.3971 7.66594 16.4052 7.91328 16.4052 9.99828C16.4052 12.0833 16.3971 12.3307 16.3597 13.1542C16.3248 13.9159 16.1976 14.3294 16.0906 14.6045C15.9491 14.9691 15.7795 15.2287 15.506 15.502C15.2326 15.7754 14.973 15.9446 14.6082 16.0863C14.3331 16.1937 13.9194 16.3206 13.1577 16.3555C12.3341 16.3929 12.0867 16.401 10.0007 16.401C7.91461 16.401 7.66734 16.3929 6.84383 16.3555C6.08211 16.3203 5.66867 16.193 5.39305 16.0861C5.02852 15.9445 4.76805 15.7752 4.49461 15.5018C4.22117 15.2284 4.05195 14.9686 3.91 14.6038C3.80305 14.3287 3.67562 13.9153 3.64094 13.1536C3.60352 12.33 3.59602 12.0827 3.59602 9.99633C3.59602 7.91008 3.60352 7.66398 3.64094 6.84039C3.67578 6.07867 3.80305 5.66523 3.91 5.38984C4.05164 5.02523 4.22117 4.76484 4.49469 4.49141C4.76813 4.21797 5.02852 4.04867 5.39312 3.9068C5.66852 3.79938 6.08211 3.67242 6.84383 3.63742C7.56453 3.60484 7.84383 3.59508 9.29984 3.59344V3.59539ZM14.171 4.89258C13.6534 4.89258 13.2335 5.31211 13.2335 5.82977C13.2335 6.34734 13.6534 6.76727 14.171 6.76727C14.6886 6.76727 15.1085 6.34734 15.1085 5.82977C15.1085 5.31219 14.6886 4.89227 14.171 4.89227V4.89258ZM10.0007 5.98797C7.78508 5.98797 5.98867 7.78438 5.98867 10.0001C5.98867 12.2158 7.78508 14.0113 10.0007 14.0113C12.2164 14.0113 14.0122 12.2158 14.0122 10.0001C14.0122 7.78445 12.2163 5.98797 10.0005 5.98797H10.0007ZM10.0007 7.39586C11.4389 7.39586 12.6049 8.56172 12.6049 10.0001C12.6049 11.4383 11.4389 12.6043 10.0007 12.6043C8.56242 12.6043 7.39656 11.4383 7.39656 10.0001C7.39656 8.56172 8.56242 7.39586 10.0007 7.39586Z" fill="white" />
                                            </g>
                                            <defs>
                                                <radialGradient id="paint0_radial_283_37" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.3125 21.5404) rotate(-90) scale(19.8215 18.4355)">
                                                    <stop stop-color="#FFDD55" />
                                                    <stop offset="0.1" stop-color="#FFDD55" />
                                                    <stop offset="0.5" stop-color="#FF543E" />
                                                    <stop offset="1" stop-color="#C837AB" />
                                                </radialGradient>
                                                <radialGradient id="paint1_radial_283_37" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-3.35008 1.4407) rotate(78.681) scale(8.86031 36.5225)">
                                                    <stop stop-color="#3771C8" />
                                                    <stop offset="0.128" stop-color="#3771C8" />
                                                    <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
                                                </radialGradient>
                                                <clipPath id="clip0_283_37">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </div>

                                    <div id='twit'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9525 5.92014C17.9647 6.09655 17.9647 6.2728 17.9647 6.45077C17.9647 11.8726 13.837 18.1258 6.28969 18.1258V18.1226C4.06001 18.1258 1.87655 17.4871 0 16.283C0.324219 16.322 0.65 16.3416 0.976562 16.3423C2.82455 16.3438 4.61938 15.724 6.07266 14.5825C5.2164 14.5663 4.3866 14.283 3.69929 13.7721C3.01197 13.2611 2.50149 12.5482 2.23922 11.733C2.85438 11.8517 3.48812 11.8272 4.09188 11.6622C2.1775 11.2755 0.800313 9.59358 0.800313 7.6403V7.58827C1.37099 7.90619 2.00969 8.08233 2.66266 8.10186C0.859375 6.89686 0.303906 4.49827 1.39266 2.62311C2.4228 3.89072 3.70806 4.92745 5.16497 5.66597C6.62188 6.40449 8.21785 6.82829 9.84922 6.90983C9.68661 6.20964 9.71068 5.47903 9.91901 4.79105C10.1274 4.10308 10.5127 3.48186 11.0364 2.98952C12.6891 1.43593 15.2883 1.51561 16.8417 3.16749C17.7607 2.98604 18.6419 2.64912 19.4475 2.17124C19.1412 3.12135 18.5002 3.92786 17.6437 4.44077C18.4571 4.34487 19.2515 4.12706 20 3.79468C19.4493 4.6193 18.756 5.33907 17.9525 5.92014Z" fill="#1D9BF0" />
                                        </svg>


                                    </div>

                                    <div id='utube'>


                                        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_283_242)">
                                                <path d="M20.5362 2.33958C20.4158 1.88738 20.1808 1.47512 19.8547 1.14386C19.5287 0.812593 19.1228 0.573884 18.6777 0.4515C17.0481 0 10.4894 0 10.4894 0C10.4894 0 3.9303 0.0136666 2.30066 0.465167C1.85552 0.587558 1.44971 0.82628 1.12363 1.15756C0.79756 1.48884 0.562604 1.90111 0.442164 2.35333C-0.0507616 5.29483 -0.241976 9.777 0.455699 12.6008C0.576152 13.053 0.811113 13.4653 1.13719 13.7966C1.46326 14.1278 1.86907 14.3665 2.3142 14.4889C3.94383 14.9404 10.5027 14.9404 10.5027 14.9404C10.5027 14.9404 17.0615 14.9404 18.6911 14.4889C19.1362 14.3665 19.5421 14.1278 19.8681 13.7966C20.1942 13.4653 20.4292 13.053 20.5497 12.6008C21.0696 9.65517 21.2298 5.17575 20.5362 2.33958Z" fill="#FF0000" />
                                                <path d="M8.40172 10.6716L13.8427 7.47005L8.40172 4.26855V10.6716Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_283_242">
                                                    <rect width="21" height="15" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                </div>
                            </div>
                        </Col>

                        <Col md={4} id='bottom-text'>

                            <b>Guide Terms & Condition  Privercy Policy</b>

                        </Col>

                    </Row>
                </Container>
            </div>


            <div id='bottom-footer'>
                <Container>
                    <footer>
                        <div id='footer-text'>
                            <p>© 2023 MEJIWOO. All Rights Reserved</p>
                        </div>
                    </footer>
                </Container>
            </div>
        </>

    );
}

export default MainPage;
