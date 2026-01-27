import React, { Component } from "react";
import { Link } from "react-router";
import t from "t-component";
import config from "lib/config";

export default class Footer extends Component {
  render() {
    console.log(config.imgs.logoFooter);
    return (
      <footer className="ext-footer">
        <div className="footer container">
          <div className="institutional">
            <div className="impulsan-logos logo gob">
              <h5>IMPULSAN</h5>
              <div className="logos">
                <a href="https://mascr.org/" target="_blank">
                  <img className="logo-incubadora" src={config.imgs.logoFooter} />
                </a>
                <a
                  href="https://www.instagram.com/movimientodiscapacidadcr/"
                  target="_blank"
                >
                  <img
                    className="logo-movimiento"
                    src="/lib/frontend/site/home-multiforum/logo_movimiento_discapacidad.jpg"
                  />
                </a>

              </div>
            </div>
            <div className="apoyo-logos">
              <h6>CON APOYO DE</h6>
              <div className="logos">
                <a href="https://centreforpublicimpact.org/">
                  <img
                    className="logo_cpi"
                    src="/lib/frontend/site/home-multiforum/cpi_logo.png"
                  />
                </a>
                <a href="https://democraciaenred.org/">
                  <img
                    className="logo_der"
                    src="/lib/frontend/site/home-multiforum/der_logo.png"
                  />
                </a>
                <a href="https://politize.org/home-es/">
                  <img
                    className="logo_politize"
                    src="/lib/frontend/site/home-multiforum/politize_logo.jpeg"
                  />
                </a>
              </div>
            </div>
          </div>
          <nav className="menu">
            <Link to="/ayuda/como-funciona">¿Cómo funciona?</Link>
            <Link to="/ayuda/acerca">Acerca de este sitio</Link>
            <Link to="/ayuda/acerca">Contacto</Link>
          </nav>
          <nav className="menu">
            <Link to="/ayuda/terminos-y-condiciones">
              {t("help.tos.title")}
            </Link>
            <Link to="/ayuda/privacidad">{t("help.pp.title")}</Link>
          </nav>
        </div>
        <div className="policies">
          <p className="text-muted small">
            Los contenidos de esta página están licenciados bajo{" "}
            <a href="https://www.gnu.org/licenses/gpl-3.0-standalone.html">
              GNU General Public License v3.0
            </a>
          </p>
        </div>
      </footer>
    );
  }
}
