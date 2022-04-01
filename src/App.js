import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './components/dashboard';
import Datasiswa from './components/datasiswa';
import Datapengguna from './components/datapengguna';
import Dataekskul from './components/dataekskul';
import Galeriekskul from './components/galeriekskul';
import Login from './components/login';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex select-none font-Sans-Pro">
        <Sidebar />
        <div className="h-screen flex-1 px-4 pt-12">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/datasiswa" element={<Datasiswa />} />
            <Route path="/datapengguna" element={<Datapengguna />} />
            <Route path="/dataekskul" element={<Dataekskul />} />
            <Route path="/galeriekskul" element={<Galeriekskul />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
