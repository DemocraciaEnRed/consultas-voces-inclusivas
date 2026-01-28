import React, { PureComponent } from 'react'
import t from 't-component'
import config from 'lib/config'
/* import { FaFacebookF, FaLink, FaXTwitter } from "react-icons/fa6"; */

const moment = require('moment')

export default ({ topic }) => {
  const { url, mediaTitle, action } = topic

  const socialLinksUrl = window.location.origin + url
  const twitterText = encodeURIComponent(
    config.tweetText ?
      t(config.tweetText, { organizationName: config.organizationName, bajadaPlataforma: config.bajadaPlataforma }).replace(/\\n/g, "\n")
      : mediaTitle
  )

  const preventClickBehind = e => {
    e.stopPropagation()
  }

  const copyToClipboard = async (e) => {
    e.stopPropagation()
    try {
      // Write the text to the clipboard. Returns a Promise.
      await navigator.clipboard.writeText(socialLinksUrl);
      alert('Enlace copiado al portapapeles');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }

  return (
    <div className='topic-article-content topic-social'>
      <div className='participants-box'>
        <span className='paticipants-box-published'>Publicado</span>
        <span>{
          moment(topic.publishedAt).format('D [de] MMMM YYYY')
        }</span>
        <span className={topic.closed ? 'icon-lock' : 'icon-lock-open'} style={{ marginRight: '5px' }}></span>
        <span className={topic.closed ? 'closed' : 'open'} >{topic.closed ? 'Cerrada' : 'Disponible'}</span>
        <span>Compartir en redes sociales</span>
      </div>
      <div className='share-links'>
        <a
          href={`http://www.facebook.com/sharer.php?u=${socialLinksUrl}`}
          target='_blank'
          rel='noopener noreferrer'
          onClick={preventClickBehind}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="social-icon" viewBox="0 0 640 640"><path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" /></svg>
        </a>
        <a
          href={`http://twitter.com/share?text=${twitterText}&url=${socialLinksUrl}`}
          target='_blank'
          rel='noopener noreferrer'
          onClick={preventClickBehind}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="social-icon" viewBox="0 0 640 640"><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" /></svg>
        </a>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" className="social-icon" onClick={copyToClipboard} viewBox="0 0 640 640"><path d="M451.5 160C434.9 160 418.8 164.5 404.7 172.7C388.9 156.7 370.5 143.3 350.2 133.2C378.4 109.2 414.3 96 451.5 96C537.9 96 608 166 608 252.5C608 294 591.5 333.8 562.2 363.1L491.1 434.2C461.8 463.5 422 480 380.5 480C294.1 480 224 410 224 323.5C224 322 224 320.5 224.1 319C224.6 301.3 239.3 287.4 257 287.9C274.7 288.4 288.6 303.1 288.1 320.8C288.1 321.7 288.1 322.6 288.1 323.4C288.1 374.5 329.5 415.9 380.6 415.9C405.1 415.9 428.6 406.2 446 388.8L517.1 317.7C534.4 300.4 544.2 276.8 544.2 252.3C544.2 201.2 502.8 159.8 451.7 159.8zM307.2 237.3C305.3 236.5 303.4 235.4 301.7 234.2C289.1 227.7 274.7 224 259.6 224C235.1 224 211.6 233.7 194.2 251.1L123.1 322.2C105.8 339.5 96 363.1 96 387.6C96 438.7 137.4 480.1 188.5 480.1C205 480.1 221.1 475.7 235.2 467.5C251 483.5 269.4 496.9 289.8 507C261.6 530.9 225.8 544.2 188.5 544.2C102.1 544.2 32 474.2 32 387.7C32 346.2 48.5 306.4 77.8 277.1L148.9 206C178.2 176.7 218 160.2 259.5 160.2C346.1 160.2 416 230.8 416 317.1C416 318.4 416 319.7 416 321C415.6 338.7 400.9 352.6 383.2 352.2C365.5 351.8 351.6 337.1 352 319.4C352 318.6 352 317.9 352 317.1C352 283.4 334 253.8 307.2 237.5z" /></svg>
        </a>
      </div>
    </div>
  )
}
