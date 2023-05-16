import { Outlet } from 'react-router';
import './App.css';
import LateralBar from './components/LateralBar/LateralBar';

function App() {
  return (
    <>
      <div className="App">
        <LateralBar />
        <Outlet />
      </div>
    </>
  )
}

export default App
