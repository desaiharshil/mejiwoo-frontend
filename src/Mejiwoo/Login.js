import React, { useState } from "react";
import axios from 'axios';
import { Container, Row, Col, Form,Button } from "react-bootstrap";
// import { toast } from "react-toastify";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import imgLogin from '../Images/login.jpg'

function Login() {
    const [loader, setloader] = useState(false)

    var navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }



    const handleSubmit = async (e) => {


        if (formData.email !== "" && formData.password !== "") {
            try {
                setloader(true)
                const res = await axios.post('http://localhost:8001/login/data/post', formData, {
                    email: "email",
                    password: "password"
                });
                if (res.status === 200) {
                    console.log(res.data.data)
                    navigate("/");
                }
            } catch (error) {
                console.error("Error during login:", error);
                toast.error("Login failed, please check your credentials");
            }

            finally {
                setloader(false)
            }

        } else {
            toast.error('Please provide valid information');
        }

    };


    const redirecttosingup = () => {
        navigate("/signup");
    };


    return (
        <>

            <ToastContainer
                position="top-center"
                autoClose={3000} />

            {
                loader && (
                    <div class="loader-container">

                        <div class="loader">
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                            <div class="bar3"></div>
                            <div class="bar4"></div>
                            <div class="bar5"></div>
                            <div class="bar6"></div>
                            <div class="bar7"></div>
                            <div class="bar8"></div>
                            <div class="bar9"></div>
                            <div class="bar10"></div>
                            <div class="bar11"></div>
                            <div class="bar12"></div>
                        </div>
                    </div>
                )

            }
            <Container>
                <Form>


                    <Row lg={12}>
                        <Col md={6}>
                            <img src={imgLogin} alt='Image not Show' style={{ width: "100%" }} />
                        </Col>

                        <Col md={6} id='login-center'>
                            <h2 id='header'><b>Login Form</b></h2>
                            <Form.Label> <b>Email</b></Form.Label>
                            <Form.Control type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Enter your email address' required />
                            <br></br>
                            <Form.Label> <b>Password</b></Form.Label>
                            <Form.Control type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Enter your password' required />
                            <br></br>
                            <Button onClick={() => handleSubmit()} id='login-button'>login</Button>
                            <br></br>
                            <div id='span'>

                                <span id='span'> Don't Have Account ? </span>  <b><a href='/singup' onClick={() => redirecttosingup()} id='singup'>Sing Up</a></b>
                            </div>

                        </Col>


                    </Row>

                </Form>
            </Container>

        </>
    )
}
export default Login;