import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { useContext } from 'react';
import LoadingBar from 'react-top-loading-bar'
import { DataContext } from './Components/DataContext';

function App() {
  const {fetchdata,progress,loading}=useContext(DataContext);
  return (
  <>  
    <Navbar fetchdata = {fetchdata}/>
    <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
    {!loading && <Home/>}
  </>
  );
}

export default App;
