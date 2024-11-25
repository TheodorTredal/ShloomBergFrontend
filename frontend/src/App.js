import './styling/App.css';
import Sidebar from './components/SideBar.tsx';
import SearchBar from './components/Search';
import RollingStockTickers from './components/ShowStockTicker';


function App() {
  return (
    <div className='background'>
      <Sidebar />
      <SearchBar />
      <RollingStockTickers/>
    </div>
  );
}

export default App;
