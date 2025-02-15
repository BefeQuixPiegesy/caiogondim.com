import Shell from '../components/shell'
import Header from '../components/header'
import Content from '../components/content'
import YearSeparator from '../components/year-separator'
import PageIntro from '../components/page-intro'
import LinkTargetBlank from '../components/link-target-blank'
import { css } from '@emotion/core'

const talkContainerStyle = css`
  address {
    font-style: normal;
  }
`

function Talks () {
  return (
    <Shell>
      <Header pageName="/ Talks" />
      <Content>
        <div>
          <PageIntro>
            I love to give talks and meet awesome people at conferences. If you want to invite me to an event,
            send me an <a href="mailto:me@caiogondim.com">email</a> and let&#039;s get in touch.
          </PageIntro>

          <YearSeparator>2019</YearSeparator>

          <section css={talkContainerStyle}>
            <h3>Brooklyn.js</h3>
            <div>
              <time>September, 2019</time>
              <address>New York, USA 📍</address>
            </div>
            <p>&nbsp;</p>
            <p>
              Spoke about <LinkTargetBlank href="https://github.com/nytimes/babel-fish">babel-fish</LinkTargetBlank>,
              an on-the-fly JavaScript transpiler. It acts as a
              reverse proxy for JavaScript resources and uses information about
              the requesting browser to optimize transpilation and polyfill
              addition to make full use of native browser features that are
              available in the requesting agent. This results in smaller, more
              performant bundles for newer browsers.
            </p>
          </section>

          <YearSeparator>2016</YearSeparator>

          <section css={talkContainerStyle}>
            <h3>Hack São Luís</h3>
            <div>
              <time>November, 2016</time>
              <address>São Luís, Brazil 📍</address>
              <LinkTargetBlank href="https://speakerdeck.com/caiogondim/ab-test">Slides</LinkTargetBlank>
            </div>
          </section>

          <YearSeparator>2015</YearSeparator>

          <section css={talkContainerStyle}>
            <h3>Node.js meetup</h3>
            <div>
              <time>April, 2015</time>
              <address>Amsterdam, Netherlands 📍</address>
              <LinkTargetBlank href="https://github.com/caiogondim/logdown.js">Project</LinkTargetBlank>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>A/B Test seminar</h3>
            <div>
              <time>April, 2015</time>
              <address>São Luís, Brazil 📍</address>
              <LinkTargetBlank href="https://speakerdeck.com/caiogondim/ab-test">Slides</LinkTargetBlank>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>Conferência CSS Brasil</h3>
            <div>
              <time>May, 2015</time>
              <address>São Paulo, Brazil 📍</address>
              <LinkTargetBlank href="http://www.slideshare.net/caiogondim/256-shades-of-r-g-and-b">Slides</LinkTargetBlank>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>Hack São Luís</h3>
            <div>
              <time>October, 2015</time>
              <address>São Luís, Brazil 📍</address>
              <LinkTargetBlank href="https://speakerdeck.com/caiogondim/ab-test">Slides</LinkTargetBlank>
            </div>
          </section>

          <YearSeparator>2014</YearSeparator>

          <section css={talkContainerStyle}>
            <h3>Front in Fortaleza</h3>
            <div>
              <time>May, 2014</time>
              <address>Fortaleza, Brazil 📍</address>
              <LinkTargetBlank href="https://speakerdeck.com/caiogondim/designing-js-apis">Slides</LinkTargetBlank>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>W3C Web.br</h3>
            <div>
              <time>September, 2014</time>
              <address>São Paulo, Brazil 📍</address>
              <LinkTargetBlank href="http://conferenciaweb.w3c.br/2014/">Event</LinkTargetBlank><br />
              <LinkTargetBlank href="https://speakerdeck.com/caiogondim/ab-test">Slides</LinkTargetBlank><br />
              <LinkTargetBlank href="https://www.youtube.com/watch?v=KcwIh1TfgI0">Video</LinkTargetBlank><br />
            </div>
          </section>

          <YearSeparator>2013</YearSeparator>

          <section css={talkContainerStyle}>
            <h3>RS.js</h3>
            <div>
              <time>March, 2013</time>
              <address>Porto Alegre, Brazil 📍</address>
              <LinkTargetBlank href="http://rsjs.org/2013/">Event</LinkTargetBlank>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>OlhóSEO</h3>
            <div>
              <time>May, 2013</time>
              <address>Florianópolis, Brazil 📍</address>
              <LinkTargetBlank href="http://www.olhoseo.com.br/2013/">Event</LinkTargetBlank><br />
              <LinkTargetBlank href="https://speakerdeck.com/caiogondim/html5-sensitivo">Slides</LinkTargetBlank>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>Front in Rio</h3>
            <div>
              <time>June, 2013</time>
              <address>Rio de Janeiro, Brazil 📍</address>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>Sampa.js</h3>
            <div>
              <time>June, 2013</time>
              <address>São Paulo, Brazil 📍</address>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>Front in Sampa</h3>
            <div>
              <time>September, 2013</time>
              <address>São Paulo, Brazil 📍</address>
              <LinkTargetBlank href="https://speakerdeck.com/caiogondim/css-layout-o-ontem-o-hoje-e-o-depois">Slides</LinkTargetBlank><br />
              <LinkTargetBlank href="https://www.youtube.com/watch?v=MjK1MCjqmpU">Video</LinkTargetBlank>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>FEEC</h3>
            <div>
              <time>November, 2013</time>
              <address>Recife, Brazil 📍</address>
              <LinkTargetBlank href="https://speakerdeck.com/caiogondim/html5-sensitivo">Slides</LinkTargetBlank>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>W3C Web.br</h3>
            <div>
              <time>November, 2013</time>
              <address>São Paulo, Brazil 📍</address>
              <LinkTargetBlank href="https://speakerdeck.com/caiogondim/html5-sensitivo">Slides</LinkTargetBlank><br />
              <LinkTargetBlank href="http://conferenciaweb.w3c.br/2013/">Event</LinkTargetBlank>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>CE.js</h3>
            <div>
              <time>November, 2013</time>
              <address>Fortaleza, Brazil 📍</address>
              <LinkTargetBlank href="https://speakerdeck.com/caiogondim/html5-sensitivo">Slides</LinkTargetBlank>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>Serra do Silício</h3>
            <div>
              <time>November, 2013</time>
              <address>Nova Friburgo, Brazil 📍</address>
              <LinkTargetBlank href="https://speakerdeck.com/caiogondim/html5-sensitivo">Slides</LinkTargetBlank>
            </div>
          </section>

          <YearSeparator>2012</YearSeparator>

          <section css={talkContainerStyle}>
            <h3>Front in Maceió</h3>
            <div>
              <time>October, 2012</time>
              <address>Maceió, Brazil 📍</address>
              <LinkTargetBlank href="https://speakerdeck.com/caiogondim/html5-sensitivo">Slides</LinkTargetBlank>
            </div>
          </section>

          <YearSeparator>2011</YearSeparator>

          <section css={talkContainerStyle}>
            <h3>3.PHP</h3>
            <div>
              <time>October, 2011</time>
              <address>São Luís, Brazil 📍</address>
              <LinkTargetBlank href="https://speakerdeck.com/caiogondim/html5-seu-navegador-nao-e-mais-o-mesmo">Slides</LinkTargetBlank>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>PHP Conf</h3>
            <div>
              <time>December, 2011</time>
              <address>São Paulo, Brazil 📍</address>
              <LinkTargetBlank href="https://speakerdeck.com/caiogondim/html5-seu-navegador-nao-e-mais-o-mesmo">Slides</LinkTargetBlank>
            </div>
          </section>
        </div>
      </Content>
    </Shell>
  )
}

export default Talks
