import { Header } from '../../components/Header'

const Blog = () => {
  return (
    <main className="mx-auto snap-y snap-mandatory h-screen  overflow-y-scroll">
      <Header>
        <section
          id="home"
          className="h-screen  fade_class bg-grip-particle bg-right-top bg-no-repeat pt-10 shadow-2xl snap-start"
        >
          <div className="h-full flex items-center justify-center">
            <h1 className="text-4xl font-bold">Blog</h1>
          </div>
        </section>
      </Header>
    </main>
  )
}
export default Blog
