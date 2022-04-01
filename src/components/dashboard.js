import { VictoryBar, VictoryChart, VictoryLine, VictoryPie } from 'victory';
import Footer from './footer';

const Dashboard = () => {
  const dataBar = [
    { quarter: 'Kelas X', earnings: 400 },
    { quarter: 'Kelas XI', earnings: 500 },
    { quarter: 'Kelas XII', earnings: 200 },
  ];

  const dataPie = [
    { x: 'Kelas X', y: 400 },
    { x: 'Kelas XI', y: 500 },
    { x: 'Kelas XII', y: 200 },
  ];
  return (
    <>
      <h1 className="text-2xl font-semibold">Dashbord</h1>
      <p className="text-gray-500 font-semibold">Selamat Datang Administrator </p>
      <div className="flex flex-1 gap-x-6 mt-10">
        <div className="w-1/4 border-2 border-slate-900 bg-slate-100 rounded-md flex items-center p-5">
          <div className="w-1/3">
            <img src={require('../assets/logo.png')} className="w-full" />
          </div>
          <div className="w-2/3">
            <p className="text-right font-bold text-7xl">1002</p>
            <p className="text-right font-bold text-xl">Total Siswa</p>
          </div>
        </div>
        <div className="w-1/4 border-2 border-slate-900 bg-slate-100 rounded-md flex items-center">
          <div className="w-1/3">
            <img src={require('../assets/logo.png')} className="w-full" />
          </div>
          <div className="w-2/3 mr-4">
            <p className="text-right font-bold text-7xl">400</p>
            <p className="text-right font-bold text-xl">Total Pengguna</p>
          </div>
        </div>
        <div className="w-1/4 border-2 border-slate-900 bg-slate-100 rounded-md flex items-center">
          <div className="w-1/3">
            <img src={require('../assets/logo.png')} className="w-full" />
          </div>
          <div className="w-2/3 mr-4">
            <p className="text-right font-bold text-7xl">12</p>
            <p className="text-right font-bold text-xl">Total Ekstrakurikuler</p>
          </div>
        </div>
        <div className="w-1/4 border-2 border-slate-900 bg-slate-100 rounded-md flex items-center">
          <div className="w-1/3">
            <img src={require('../assets/logo.png')} className="w-full" />
          </div>
          <div className="w-2/3 mr-4">
            <p className="text-right font-bold text-7xl">12</p>
            <p className="text-right font-bold text-xl">Total Pendaftaran</p>
          </div>
        </div>
      </div>
      <div className="flex gap-x-6 mt-6 max-w-8xl mx-auto">
        <div className="w-1/2 border-2 border-slate-900 p-10 bg-slate-100 rounded-md">
          <VictoryChart domainPadding={20}>
            <VictoryBar data={dataBar} x="quarter" y="earnings" style={{ data: { fill: 'darkred' } }} />
          </VictoryChart>
        </div>
        <div className="w-1/2 border-2 border-slate-900 p-10 bg-slate-100  rounded-md">
          <VictoryPie data={dataPie} colorScale={['red', 'navy', 'green']} style={{ data: { fillOpacity: 0.9, stroke: '#ffffff', strokeWidth: 3 } }} />
        </div>
        <div className="w-1/2 border-2 border-slate-900 p-10 bg-slate-100  rounded-md">
          <VictoryChart>
            <VictoryLine
              style={{
                data: { stroke: '#c43a31' },
                parent: { border: '1px solid #ccc' },
              }}
              data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 },
              ]}
            />
          </VictoryChart>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
