import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import GetStarted from './components/pages/getstarted';
import Dashboard from './components/pages/dashboard';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/getstarted" element={<GetStarted />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  )
}

export default App;
