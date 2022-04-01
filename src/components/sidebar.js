import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'boxicons';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="bg-slate-900 bg-opacity-95 shadow-xl h-10 w-full absolute ">
        <div className={`${open ? 'left-[14px] md:left-[184px] xl:left-[300px]' : 'left-[115px] md:left-[110px] xl:left-[112px]'} absolute top-2 inline-block cursor-pointer `} onClick={() => setOpen(!open)}>
          <box-icon name="menu" color="#ffffff"></box-icon>
        </div>
        <div className="cursor-pointer absolute right-[14px] top-1 flex items-center gap-2 bg-yellow-500 rounded-xl px-2 py-1">
          <box-icon name="log-out"></box-icon>
          <span className="font-semibold text-xs">Logout</span>
        </div>
      </div>
      <div className={`${open ? 'hidden md:w-72' : 'md:w-24'} md:inline h-screen p-5  bg-slate-900 relative duration-300 shadow-xl shadow-slate-900`}>
        <div className="flex gap-x-2 items-center">
          <img src={require('../assets/logo.png')} className={`w-14 cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`} />
          <h1 className={`text-white origin-left font-medium text-xs duration-200 ${!open && 'hidden'}`}>
            <strong>SMAN 10 BEKASI</strong>
            <br />
            Sistem Informasi <br /> Monitoring Ekstrakurikuler
          </h1>
        </div>
        <div className="bg-slate-100 h-[1px] opacity-30 mt-5 "></div>
        <ul className="pt-6 px-2 space-y-2">
          <li className="flex rounded-md p-2 cursor-pointer bg-slate-100 bg-opacity-30 text-gray-300 text-sm items-center">
            <Link to="sime/" className="flex items-center gap-2">
              <box-icon name="dashboard" type="solid" color="#ffffff" animation="tada-hover"></box-icon>
              <span className={`${!open && ' hidden'} origin-left duration-300`}>Dashboard</span>
            </Link>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-100 hover:bg-opacity-30 text-gray-300 text-sm items-center">
            <Link to="sime/datasiswa" className="flex items-center gap-2">
              <box-icon name="list-ul" color="#ffffff" animation="tada-hover"></box-icon>
              <span className={`${!open && 'hidden'} origin-left duration-300`}>Data Siswa</span>
            </Link>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-100 hover:bg-opacity-30 text-gray-300 text-sm items-center">
            <Link to="sime/datapengguna" className="flex items-center gap-2">
              <box-icon name="user-account" type="solid" color="#ffffff" animation="tada-hover"></box-icon>
              <span className={`${!open && 'hidden'} origin-left duration-300`}>Data Pengguna</span>
            </Link>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-100 hover:bg-opacity-30 text-gray-300 text-sm items-center">
            <Link to="sime/dataekskul" className="flex items-center gap-2">
              <box-icon name="book" type="solid" color="#ffffff" animation="tada-hover"></box-icon>
              <span className={`${!open && 'hidden'} origin-left duration-300`}>Data Ekstrakurikuler</span>
            </Link>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-100 hover:bg-opacity-30 text-gray-300 text-sm items-center">
            <Link to="sime/galeriekskul" className="flex items-center gap-2">
              <box-icon name="images" color="#ffffff" animation="tada-hover"></box-icon>
              <span className={`${!open && 'hidden'} origin-left duration-300`}>Galeri Ekstrakurikuler</span>
            </Link>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-100 hover:bg-opacity-30 text-gray-300 text-sm items-center">
            <Link to="sime/login" className="flex items-center gap-2">
              <box-icon name="log-in" color="#ffffff" animation="tada-hover"></box-icon>
              <span className={`${!open && 'hidden'} origin-left duration-300`}>Login</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
