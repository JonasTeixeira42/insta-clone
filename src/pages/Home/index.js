import { Content } from '../../components/Content'
import { Sidebar } from '../../components/Sidebar'

import './styles.css'

const Home = () => {
  return (
    <section class="home">
      <Sidebar />
      <main class="main">
        <Content />
      </main>
    </section>
  )
}

export { Home }
