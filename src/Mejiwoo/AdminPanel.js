import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

function AdminPanel() {

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div style={{ width: "250px", height: "100vh", background: "#f8f9fa", padding: "20px" }}>
                <h4>Admin Panel</h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li>
                        <Link to="/login" className="text-decoration-none">
                            <i className="bi bi-grid-fill me-2"></i>Login
                        </Link>
                    </li>
                    <li className="mt-3">
                        <Link to="/" className="text-decoration-none">
                            <i className="bi bi-box-seam me-2"></i>Home Page
                        </Link>
                    </li>

                    {/* <li className="mt-3">
                        <Link to="/login" className="text-decoration-none">
                            <i className="bi bi-box-seam me-2"></i>Login
                        </Link>
                    </li> */}
                </ul>
            </div>
            </div>
    );
}

export default AdminPanel;
