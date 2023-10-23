import { Feed } from '../Feed'
import { Header } from '../Header'
import { StoriesList } from '../StoriesList'
import './styles.css'

const Content = () => {
  return (
    <>
      <Header />
      <StoriesList />
      <Feed />
    </>
  )
}

export { Content }
