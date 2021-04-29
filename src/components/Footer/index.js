import React from 'react'
import './styles.css'
import emailIcon from '../../images/mail-icon.svg';
import callIcon from '../../images/call-icon.svg';
import corebizWhiteLogo from '../../images/logo-white.svg';
import vtexLogo from '../../images/logo-vtex.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="location">
                    <h3>Localização</h3>
                    <p>
                        Avenida Andrômeda, 2000. Bloco 6 e 8 <br />
                        Alphavile SP <br />
                        brasil@corebiz.ag <br />
                        +55 11 3090 1039
                    </p>
                </div>
                <div className="contacts">
                    <a href="/#">
                        <img src={emailIcon} alt="Contato"/><span>ENTRE EM CONTATO</span> 
                    </a>
                    <a href="/#">
                        <img src={callIcon} alt="Suporte"/><span>FALE COM O NOSSO CONSULTOR ONLINE</span>
                    </a>
                </div>
                <div className="info-icons">
                    <a href="https://www.corebiz.ag">
                        <p>Created by</p>
                        <img src={corebizWhiteLogo} alt="Corebiz"/>
                    </a>
                    <a href="https://www.corebiz.ag">
                        <p>Powered by</p>
                        <img src={vtexLogo} alt="Vtex"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;