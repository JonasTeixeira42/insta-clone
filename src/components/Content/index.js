import { Feed } from "../Feed";
import { StoriesList } from "../StoriesList";
import "./styles.css";

const Content = () => {
  return (
    <>
      <StoriesList />
      <Feed />
    </>
  );
};

export { Content };
