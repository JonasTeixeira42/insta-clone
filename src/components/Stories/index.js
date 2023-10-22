import { Avatar } from '../Avatar'

import './styles.css'

const Stories = ({ url }) => {
  return (
    <div className="stories">
      <Avatar url={url} />
      <h3 class="name">Samantha</h3>
    </div>
  )
}

export { Stories }
