import { Stories } from '../Stories'

import './styles.css'

const StoriesList = () => {
  return (
    <div className="stories-wrapper">
      <h2 className="title">Stories</h2>
      <div className="stories-list">
        <Stories url="https://source.unsplash.com/random/120x120" />
        <Stories url="https://source.unsplash.com/random/121x120" />
        <Stories url="https://source.unsplash.com/random/122x120" />
        <Stories url="https://source.unsplash.com/random/123x120" />
        <Stories url="https://source.unsplash.com/random/124x120" />
        <Stories url="https://source.unsplash.com/random/125x120" />
        <Stories url="https://source.unsplash.com/random/126x120" />
        <Stories url="https://source.unsplash.com/random/127x120" />
        <Stories url="https://source.unsplash.com/random/128x120" />
        <Stories url="https://source.unsplash.com/random/129x120" />
        <Stories url="https://source.unsplash.com/random/130x120" />
        <Stories url="https://source.unsplash.com/random/131x120" />
        <Stories url="https://source.unsplash.com/random/132x120" />
      </div>
    </div>
  )
}

export { StoriesList }
