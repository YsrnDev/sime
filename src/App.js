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
            <Route path="sime/" element={<Dashboard />} />
            <Route path="sime/datasiswa" element={<Datasiswa />} />
            <Route path="sime/datapengguna" element={<Datapengguna />} />
            <Route path="sime/dataekskul" element={<Dataekskul />} />
            <Route path="sime/galeriekskul" element={<Galeriekskul />} />
            <Route path="sime/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
