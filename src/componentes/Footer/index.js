import React from "react";
import logo from "../../assets/imgs/logo.png";
import './styles.css';


export default function Footer() {
    return (
        <footer>
            <div className="dados-footer limitador-largura">
                <img src={logo} />
                <div>
                    <h4>ENDEREÇO</h4>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div>
                    <h4>CONTATO</h4>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>

                </div>
                <div>
                    <h4>HORÁRIOS</h4>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>

                </div>

            </div>
            <div className="copy">
                <p>Gelateria. Orgulhosamente desenvolvido por - Wallas Castro.</p>
            </div>
        </footer>
    );
}