import { Stories } from '../Stories'

import { stories } from './stories'

import './styles.css'

const StoriesList = () => {
  return (
    <div className="stories-wrapper">
      <h2 className="title">Stories</h2>
      <div className="stories-list">
        {stories.map((story) => (
          <Stories url={story.url} name={story.name} />
        ))}
      </div>
    </div>
  )
}

export { StoriesList }
