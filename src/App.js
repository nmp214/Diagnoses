import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import SensoryProfile from './Components/SensoryProfile';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import Home from './Components/Home';
import GIFT from './Components/GIFT';

function App() {
  function handleButtonClick() {
    console.log('handleButtonClick');
  }

  return (
    <>
      {/* <Router> */}
      <BrowserRouter>
        <ResponsiveAppBar />
        <br /><br />
        <Routes>
          {/* <Route path='/' Component={ResponsiveAppBar} /> */}
          <Route path="/" Component={Home} />
          <Route path="/SensoryProfile" Component={SensoryProfile} />
          {/* <Route path="/GIFT" component={() => <GIFT onClickCallback={handleButtonClick} />} /> */}
          <Route path="/GIFT" Component={GIFT} />
        </Routes>
      </BrowserRouter>
      {/* </Router> */}
    </>
  );
}

export default App;
