import React from 'react';
import imgOreo from '../../assets/imgs/sabor-oreo.png'
import imgPistache from '../../assets/imgs/sabor-pistache.png'
import imgAvela from '../../assets/imgs/sabor-cookies-avela.png'
import imgKiwi from '../../assets/imgs/sorbet-kiwi.png'
import imgMorango from '../../assets/imgs/sorbet-morango.png'
import imgSiciliano from '../../assets/imgs/sorbet-limao.png'
import './styles.css';



export default function CardSabores() {
    const sorvetes = [
        { img: imgOreo, lbl: "Sorvete de Oreo", texto: "Delicioso sorvete sabor Oreo. Uma explosão de sabor." },
        { img: imgPistache, lbl: "Sorvete Pistache", texto: "Cremoso sorvete sabor pistache com pedacinhos de semente." },
        { img: imgAvela, lbl: "Sorvete Cookies & Avelã", texto: "O nosso melhor sorvetes. Você vai adorar o sabor." },
        { img: imgKiwi, lbl: "Sorvete de Kiwi", texto: "Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C." },
        { img: imgMorango, lbl: "Sorvete de Morango", texto: "Sorvete de morango gourmet. Tradicional e saboroso." },
        { img: imgSiciliano, lbl: "Sorvete de Limão Siciliano", texto: "O incrivel sorvete gourmet de limão siciliano vai te encantar." }
    ];

    return (
        <div className='cards-sabores limitador-largura'>
            <div className='card-sabores'>
                <img src={sorvetes[0].img} />
                <div className="texto">
                    <h3>{sorvetes[0].lbl}</h3>
                    <p>{sorvetes[0].texto}</p>
                </div>
            </div>
            <div className='card-sabores'>
                <img src={sorvetes[1].img} />
                <div className="texto">
                    <h3>{sorvetes[1].lbl}</h3>
                    <p>{sorvetes[1].texto}</p>
                </div>
            </div>
            <div className='card-sabores'>
                <img src={sorvetes[2].img} />
                <div className="texto">
                    <h3>{sorvetes[2].lbl}</h3>
                    <p>{sorvetes[2].texto}</p>
                </div>
            </div>
            <div className='card-sabores'>
                <img src={sorvetes[3].img} />
                <div className="texto">
                    <h3>{sorvetes[3].lbl}</h3>
                    <p>{sorvetes[3].texto}</p>
                </div>
            </div> <div className='card-sabores'>
                <img src={sorvetes[4].img} />
                <div className="texto">
                    <h3>{sorvetes[4].lbl}</h3>
                    <p>{sorvetes[4].texto}</p>
                </div>
            </div> <div className='card-sabores'>
                <img src={sorvetes[5].img} />
                <div className="texto">
                    <h3>{sorvetes[5].lbl}</h3>
                    <p>{sorvetes[5].texto}</p>
                </div>
            </div>
        </div>
    );
}

