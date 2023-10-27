import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/imgs/logo.png'
import './styles.css';

export default function Header() {
    return (
        <header>
            <div className="header limitador-largura">
                <img src={logo} />
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/sabores">Sabores</Link>
                    <Link to="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    );
}