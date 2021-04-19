import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => {
  return <header>
    <div className="container">
      <div className="logo">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="260.446" height="41.958" viewBox="0 0 260.446 41.958"><defs></defs><g transform="translate(0 0)"><g transform="translate(59.241 8.249)"><path d="M170.273,301.127h-2.239v-2.138h9.715c7.305,0,12.163,4.446,12.163,12.094,0,7.718-4.857,12.128-12.163,12.128h-5.375c-1.481,0-2.1-.621-2.1-2.1Zm3.17,19.948h4.066c5.96,0,9.888-3.514,9.888-9.991,0-6.444-3.962-9.957-9.888-9.957h-4.824v19.189A.674.674,0,0,0,173.442,321.075Z" transform="translate(-168.034 -298.164)"/><path d="M188.259,301.127H186.02v-2.138h13.85c1.481,0,2.1.621,2.1,2.1V303.5H199.7v-1.619a.674.674,0,0,0-.758-.757h-8.269v8.82h9.1v2.135h-9.1v8.234a.674.674,0,0,0,.758.759h8.509a.674.674,0,0,0,.758-.759V318.7h2.24v2.413c0,1.481-.619,2.1-2.1,2.1H190.36c-1.481,0-2.1-.621-2.1-2.1Z" transform="translate(-162.76 -298.164)"/><path d="M200.889,321.075h1.275c.482,0,.723-.241.758-.759l1.688-21.327h2.447l6.408,14.092c.586,1.24,1.205,2.861,1.205,2.861h.07s.621-1.62,1.172-2.861l6.408-14.092h2.447l1.688,21.327c.035.519.275.759.758.759h1.309v2.136h-2.342c-1.482,0-2-.621-2.1-2.1L222.938,306.4c-.1-1.31-.1-3.378-.1-3.378h-.069a32.537,32.537,0,0,1-1.241,3.378l-5.754,12.3H213.6l-5.72-12.3c-.551-1.207-1.274-3.445-1.274-3.445h-.07s0,2.135-.1,3.445L205.3,321.109c-.1,1.481-.621,2.1-2.1,2.1h-2.308Z" transform="translate(-158.4 -298.164)"/><path d="M236.166,298.67A12.242,12.242,0,0,1,248.5,311.038a12.339,12.339,0,1,1-24.669,0A12.221,12.221,0,0,1,236.166,298.67Zm0,22.774c5.41,0,9.819-4.547,9.819-10.405a9.823,9.823,0,1,0-19.639,0C226.346,316.9,230.723,321.444,236.166,321.444Z" transform="translate(-151.673 -298.257)"/><path d="M255.22,315.438s2.552,2.9,5.65,2.9c1.24,0,2.48-.449,2.48-1.826,0-2.722-11.161-3.033-11.161-10.751,0-4.444,3.891-7.406,8.784-7.406,3.274,0,7.856,1.583,7.856,5.338v2.689h-5.512v-1.07c0-.895-1.275-1.446-2.412-1.446-1.24,0-2.517.517-2.517,1.654,0,3,11.164,2.584,11.164,10.679,0,4.1-3.2,7.615-8.751,7.615a12.031,12.031,0,0,1-8.992-4.066Z" transform="translate(-143.469 -298.351)"/><path d="M269.319,304.6a.689.689,0,0,0-.758-.758h-1.483V298.67h5.893c1.755,0,2.513.758,2.513,2.514v7.339h8.34v-7.339c0-1.756.758-2.514,2.514-2.514h5.892v5.168h-1.482a.689.689,0,0,0-.758.758V323.3h-6.166v-9.647h-8.34V323.3h-6.165Z" transform="translate(-138.992 -298.257)"/><path d="M300.27,298.351c7.441,0,12.884,5.512,12.884,12.574a12.886,12.886,0,1,1-25.771,0C287.383,303.863,292.826,298.351,300.27,298.351Zm0,19.776c3.581,0,6.475-3.1,6.475-7.2a6.489,6.489,0,1,0-12.954,0C293.791,315.026,296.685,318.127,300.27,318.127Z" transform="translate(-133.038 -298.351)"/><path d="M310.405,303.838h-2.237V298.67h11.955c4.789,0,8.027,3.515,8.027,8.476s-3.238,8.544-8.027,8.544h-3.549V323.3h-6.169Zm8.477,6.685c2,0,2.963-1.413,2.963-3.377s-.965-3.308-2.859-3.308h-2.412v6.685Z" transform="translate(-126.944 -298.257)"/></g><path className="color__a" d="M162.254,312.952l1.84-4.8a1.311,1.311,0,0,0-.4-1.49l-3.991-3.236-.807-5.08a1.312,1.312,0,0,0-1.091-1.088l-5.078-.807-3.233-3.995a1.316,1.316,0,0,0-1.487-.4l-4.8,1.844-4.8-1.842a1.31,1.31,0,0,0-1.487.4l-3.236,3.995-5.08.807a1.314,1.314,0,0,0-1.088,1.089l-.808,5.078-3.993,3.236a1.314,1.314,0,0,0-.4,1.487l1.84,4.8-1.84,4.8a1.31,1.31,0,0,0,.4,1.487l3.993,3.233.808,5.078a1.311,1.311,0,0,0,1.088,1.091l5.08.807,3.236,3.991a1.305,1.305,0,0,0,1.49.4L143.2,332l4.8,1.842a1.328,1.328,0,0,0,.469.085,1.306,1.306,0,0,0,1.02-.488l3.233-3.991,5.078-.807a1.315,1.315,0,0,0,1.091-1.091l.807-5.078,3.991-3.233a1.307,1.307,0,0,0,.4-1.487Z" transform="translate(-122.225 -291.972)"/><g transform="translate(13.111 10.49)"><path className="color__b" d="M136.3,307.952a3.933,3.933,0,1,1,3.933-3.934A3.939,3.939,0,0,1,136.3,307.952Zm0-5.244a1.311,1.311,0,1,0,1.311,1.31A1.311,1.311,0,0,0,136.3,302.708Z" transform="translate(-132.364 -300.083)"/><path className="color__b" d="M142.381,318.09a3.933,3.933,0,1,1,3.933-3.934A3.939,3.939,0,0,1,142.381,318.09Zm0-5.244a1.311,1.311,0,1,0,1.311,1.31A1.314,1.314,0,0,0,142.381,312.846Z" transform="translate(-130.58 -297.11)"/><path className="color__b" d="M133.675,321.063a1.311,1.311,0,0,1-1.064-2.074l13.111-18.355a1.311,1.311,0,0,1,2.135,1.523l-13.112,18.355A1.315,1.315,0,0,1,133.675,321.063Z" transform="translate(-132.364 -300.084)"/></g></g></svg>
        </Link>
      </div>
      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  </header>
}

export default Header