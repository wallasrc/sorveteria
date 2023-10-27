import React from "react";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import './styles.css';
import img1 from '../../assets/imgs/sobre-image.jpg'
import img2 from '../../assets/imgs/sorveteria.jpg'


export default function Sobre() {
    return (
        <body>
            <Header />
            <main>
                <section>
                    <div className="banner-sobre">
                        <h1>A GELATERIA</h1>
                    </div>
                </section>
                <section>
                    <div>
                        <div className="texto-sobre limitador-largura">
                            <h1>sobre Nós</h1>
                            <h3>Nós simplesmente amamos sorvete!</h3>
                            <p>Nós simplesmente amamos sorvete!
                                Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                            <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                            </p>
                        </div>
                        <div className="img-sobre">
                            <img src={img1} />
                            <img src={img2} />
                        </div>
                    </div>

                </section>

            </main>
            <Footer />
        </body>
    );
}