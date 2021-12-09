import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header.js';
import UserList from './components/UserLists.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<UserList />} />

      </Routes>

    </div>

  );
}
export default App;



