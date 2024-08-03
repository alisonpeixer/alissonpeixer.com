import Head from 'next/head'
import { Header } from '../components/Header'
import { Home } from '../components/Sections/Home'
import { Bio } from '../components/Sections/Bio'
import { Stacks } from '../components/Sections/Stacks'
import { Project } from '../components/Sections/Projects'
import { GitHub } from '../components/Sections/GitHub'
import { Footer } from '../components/Sections/Footer'

export default function App() {
  return (
    <>
      <Head>
        <title>Alisson Peixer</title>
        <meta name="description" content="Bem-vindo ao meu portfólio! Aqui você pode encontrar meus projetos, habilidades e experiências." />
        <meta name="keywords" content="Portfólio, Next.js, React, Desenvolvedor Web, FullStack Dev" />
        <meta name="author" content="Alisson Peixer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto snap-y snap-mandatory h-screen  overflow-y-scroll">
        <Header>
          <Home />
          <Bio />
          <Stacks />
          <Project />
          <GitHub />
          <Footer />
        </Header>
      </main>

    </>
  )
}
