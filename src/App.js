import Home from './views/home/Home';
import SignUp from './views/SignUp';
import Login from './views/Login';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import QrCode from './views/QrCode';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/qrcode" element={<QrCode />} />
      </Routes>
    </div>
  );
}

export default App;
