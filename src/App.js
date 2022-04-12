import React, {useEffect} from 'react';
import Header from "./components/Header/Header";
import './app.scss';
import Main from "./components/Main/Main";
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
    </div>
  );
}

export default App;
