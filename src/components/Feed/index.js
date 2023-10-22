import { Post } from '../Post'
import { posts } from './posts'

import './styles.css'

const Feed = () => {
  return (
    <section className="feed">
      {posts.map((post) => (
        <Post {...post} />
      ))}
    </section>
  )
}

export { Feed }
