import { Avatar } from '../Avatar'

import './styles.css'

const Stories = ({ url, name }) => {
  return (
    <div className="stories">
      <Avatar url={url} />
      <h3 class="name">{name}</h3>
    </div>
  )
}

export { Stories }
