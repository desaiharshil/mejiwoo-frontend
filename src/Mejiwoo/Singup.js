import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import imgSingup from '../Images/singup.jpg';

function Singup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = formData.name;
        const email = formData.email;
        const password = formData.password;

        if (!name || !email || !password) {
            alert("Both email and password are required");
            return;
        }

        try {
            const res = await axios.post('http://localhost:8001/singup/data/post', formData, {
                name: "name",
                email: "email",
                password: "password"
            });
            console.log(res.data);
            toast.success("record add successfully")
        } catch (error) {
            console.error(error.res?.data.data.message || "Error logging in");
        }

    };
    // const redirecttologin = () => {
    //     navigate("/login")
    // };

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
            />
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <img src={imgSingup} alt='Image is not defined' style={{ width: "100%" }} />
                        </Col>
                        <Col id='login-center' md={6}>
                            <h2 id='header'><b>Singup</b></h2>
                            <Form.Group controlId="formName">
                                <Form.Label><b>Name</b></Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Enter your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label><b>Email</b></Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label> <b>Password</b></Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Button id='btnSingup' variant="primary" type="submit" >
                                Singup
                            </Button><br></br>
                            <div id='span'>
                            <span>Already a Member? </span>  <b><a href='/login' id='login'>Login</a></b>
                            </div>

                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
}

export default Singup;
