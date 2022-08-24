//import logo from './logo.svg';
import './App.css';
// import PostMenu from './content/PostMenu';
import ListPost from './content/ListPost';
import LeftBar from './content/LeftBar';
import { Switch } from '@headlessui/react';
import { Route, Routes } from 'react-router-dom';
import Profil from './content/Profil';
// import Header from './content/Header';
// import { BeakerIcon } from '@heroicons/react/solid'

function App() {
  return (
    <div className="App bg-white drop-shadow-md flex h-screen">
      <div className='flex flex-none w-1/4 bg-gray-50'>
        <LeftBar/>
      </div>
      <div className='flex flex-col gap-2 flex-grow px-8 bg-gray-200 justify-start overflow-auto'>
        <Switch>
          <Routes>
            <Route path='/' element={ <ListPost/> } />
            <Route path='/linimasa' element={ <ListPost/> } />
            <Route path='/profil' element={ <Profil/> } />
            <Route path='/gacha' element={ <Profil/> } />
            <Route path='/pengaturan' element={ <Profil/> } />
          </Routes>
        </Switch>
      </div>
      <div className=' flex-none w-1/4 bg-gray-50 hidden'></div>
    </div>
  );
}

export default App;
