// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import "./styles.css";
import Header from "./components/Header";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <Header></Header>
      </div>
      <footer className="footer">
        <p className="footer">Footer content here</p>
      </footer>
    </div>
  );
}

export default App;
