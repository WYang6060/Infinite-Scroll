import "./styles.css";
import List from "./List";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="justify-content-center">
          <h1>Infinite Scroll</h1>
          <List />
        </div>
      </div>
    </div>
  );
}
