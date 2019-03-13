import Link from 'next/link'
import Head from 'next/head'
import Shell from '../components/shell'

function Index() {
  return (
    <Shell>
      <style jsx>{`

      `}</style>
      <main>
        <section>
          <div class="nav__table-of-contents">
            <a href="/about.html" class="nav__table-of-contents-item"><h3>ABOUT</h3></a>
            <a href="https://github.com/caiogondim" target="_blank" class="nav__table-of-contents-item"><h3>CODE</h3></a>
            <a href="/photos.html" class="nav__table-of-contents-item"><h3>PHOTOS</h3></a>
            <a href="/posts.html" class="nav__table-of-contents-item"><h3>POSTS</h3></a>
            <a href="/projects.html" class="nav__table-of-contents-item"><h3>PROJECTS</h3></a>
            <a href="/publications.html" class="nav__table-of-contents-item"><h3>PUBLICATIONS</h3></a>
            <a href="https://www.linkedin.com/in/cgondim/" target="_blank" class="nav__table-of-contents-item"><h3>RÉSUMÉ</h3></a>
            <a href="/talks.html" class="nav__table-of-contents-item"><h3>TALKS</h3></a>
          </div>
        </section>
      </main>
    </Shell>
  )
}

export default Index
