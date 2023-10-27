import React from "react";
import Header from "../../componentes/Header";
import imgSabores from '../../assets/imgs/banner-sabores.jpg';
import imgEventos from '../../assets/imgs/eventos-image.jpg';
import imgSobre from '../../assets/imgs/banner-sabores.jpg';
import Footer from "../../componentes/Footer";
import './styles.css';

export default function Home() {
    return (
        <body>
            <Header />
            <main>
                <section>
                    <div className="banner-home">
                        <h1>SORVETE ARTESANAL</h1>
                    </div>
                </section>
                <section>
                    <div className="div-main">
                        <img src={imgSabores} className="img-main" />
                        <div className="texto-main">
                            <h2>NOSSOS SABORES</h2>
                            <h5>Novos e deliciosos!</h5>
                            <p>
                                Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                            </p>
                        </div>
                    </div>

                </section>
                <section>
                    <div className="div-main div-eventos">
                        <div className="texto-main">
                            <h2>NOSSOS EVENTOS</h2>
                            <h5>Delícias com sorvete!</h5>
                            <p>
                                Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                            </p>
                        </div>
                        <img src={imgEventos} className="img-main" />
                    </div>
                </section>
                <section>
                    <div className="div-main">
                        <img src={imgSobre} className="img-main" />
                        <div className="texto-main">
                            <h2>SOBRE NÓS</h2>
                            <h5>Alegria em casa casquinha!</h5>
                            <p>
                                Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                            </p>
                        </div>
                    </div>

                </section>
            </main>

            <Footer />
        </body>
    );
}