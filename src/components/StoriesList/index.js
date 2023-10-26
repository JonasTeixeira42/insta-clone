import { Stories } from "../Stories";

import "./styles.css";

const StoriesList = () => {
  return (
    <div className="stories-wrapper">
      <h2 className="title">Stories</h2>
      <div className="stories-list">
        <Stories url="https://source.unsplash.com/random/?person/120x120" />
        <Stories url="https://source.unsplash.com/random/?person/121x120" />
        <Stories url="https://source.unsplash.com/random/?person/122x120" />
        <Stories url="https://source.unsplash.com/random/?person/123x120" />
        <Stories url="https://source.unsplash.com/random/?person/124x120" />
        <Stories url="https://source.unsplash.com/random/?person/125x120" />
        <Stories url="https://source.unsplash.com/random/?person/126x120" />
        <Stories url="https://source.unsplash.com/random/?person/127x120" />
        <Stories url="https://source.unsplash.com/random/?person/128x120" />
        <Stories url="https://source.unsplash.com/random/?person/129x120" />
        <Stories url="https://source.unsplash.com/random/?person/130x120" />
        <Stories url="https://source.unsplash.com/random/?person/131x120" />
        <Stories url="https://source.unsplash.com/random/?person/132x120" />
      </div>
    </div>
  );
};

export { StoriesList };
