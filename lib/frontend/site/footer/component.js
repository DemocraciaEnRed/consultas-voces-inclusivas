import React, { Component } from 'react'
import { Link } from 'react-router'
import t from 't-component'
import config from 'lib/config'

export default class Footer extends Component {

  render() {
    console.log(config.imgs.logoFooter);
    return (
      <footer className='ext-footer'>
        <div className='footer container'>
          <div className='institutional'>
            <div className='logo gob'>
              <a href='/'>
                <h5>Colectivo CPI</h5>
                <h6> Incubadora de Liderazgos +CR</h6>
                <img src={config.imgs.logoFooter} />
              </a>
            </div>
            <div className='social-logos'>
              <a href='https://www.linkedin.com/company/incubadora-costa-rica/people/'>
                <img src="/lib/frontend/site/home-multiforum/linkedin.svg" width={32} height={32} />
              </a>
              <a href='https://www.instagram.com/incubadoramascr/?hl=es'>
                <img src="/lib/frontend/site/home-multiforum/instagram.svg" width={32} height={32} />
              </a>
            </div>
            <p className='text-muted small'>
              Los contenidos de esta página están licenciados bajo <a href='https://www.gnu.org/licenses/gpl-3.0-standalone.html'>GNU General Public License v3.0</a>
            </p>
          </div>
          <nav className='menu'>
            <Link to='/ayuda/como-funciona'>¿Cómo funciona?</Link>
            <Link to='/ayuda/acerca'>Acerca de este sitio</Link>
            <Link to='/ayuda/acerca'>Contacto</Link>
          </nav>
          <nav className='menu'>
            <Link to='/ayuda/terminos-y-condiciones'>{t('help.tos.title')}</Link>
            <Link to='/ayuda/privacidad'>{t('help.pp.title')}</Link>
          </nav>
        </div>
      </footer>
    )
  }
}
