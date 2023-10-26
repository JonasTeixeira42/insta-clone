import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";

import "./App.css";

function App() {
  return (
    <section class="home">
      <Sidebar />
      <main class="main">
        <Content />
      </main>
    </section>
  );
}

export default App;
