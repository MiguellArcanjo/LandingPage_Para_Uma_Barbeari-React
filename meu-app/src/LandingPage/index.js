import React, { useState } from "react";
import './style.css';

export default function LandingPage() {

    const iconeSol = 'assets/sun.png';
    const iconeLua = 'assets/moon.png';
    const modoClaro = 'modo-claro';
    const modoEscuro = 'modo-escuro';
    const botaoClaro = 'botaoClaro';
    const botaoEscuro = 'botaoEscuro'
    const TextEscuro = 'Dark';
    const TextClaro = 'Ligth';

    const [ tema, setTema ] = useState(modoClaro);
    const [ iconeBotao, setIconeBotao ] = useState(iconeLua);
    const [ botaoCor, setBotaoCor ] = useState(botaoClaro);
    const [ text, setText ] = useState(TextEscuro)

    function NovoTemaNovoIcone() {
        if (tema === modoClaro) {
            setTema(modoEscuro);
            setIconeBotao(iconeSol)
            setBotaoCor(botaoEscuro)
            setText(TextClaro)
        } else {
            setTema(modoClaro);
            setIconeBotao(iconeLua)
            setBotaoCor(botaoClaro)
            setText(TextEscuro)
        }
    }

    

    return (
        <div className={ tema }>
            <header>
                <div className="limita-secao topo">
                    <img src="assets/barbearia-logo.png" alt="" className="logo" />
                    <button onClick={NovoTemaNovoIcone} className={botaoCor}>
                        <img src={ iconeBotao } alt=""/>
                        {text}
                    </button>
                </div>
            </header>
        
            <main>
                <section className="secaoBanner"></section>

                <section className="conteudoPage">
                    <div className="limita-secao">
                        <div className="div1">
                            <h1>Bem-vindo a Barber Shop</h1>

                            <span>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</span>

                            <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                        </div>
                    
                        <div className="div2">
                            <p>S. Kelly</p>
                        </div>
                    </div>
                    
                    
                </section>
            </main>
        </div>
    );
}