import React from "react";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import './styles.css';
import CardSabores from "../../componentes/CardSabores";


export default function Sabores() {
    return (
        <body>
            <Header />
            <main>

                <section>
                    <div className="banner-sabores">
                        <h1>NOSSOS SABORES</h1>
                    </div>
                </section>
                <section>
                    <div className="conteudo-sabores">
                        <h1>SABORES DE SORVETE</h1>
                        <CardSabores />
                    </div>
                </section>

            </main>
            <Footer />
        </body>
    );


}