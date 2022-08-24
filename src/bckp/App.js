//import logo from './logo.svg';
import './App.css';
import PostMenu from './content/PostMenu';
import ListPost from './content/ListPost';
import Header from './content/Header';

function App() {
  return (
    <div className="App bg-white mx-72 drop-shadow-md">
      <div id='bg-pattern' className='bg-gray-600'>
        <Header/>
        <PostMenu />
      </div>
      <div className='bg-white'>
        <div className='text-left text-gray-900 p-8'>
          Sambatan Terkini :
        </div>
        <div className='flex flex-col h-fit'>
          <ListPost />
          <ListPost />
          <ListPost />
        </div>
        <div className='text-gray-500 p-4'>
          UI ini didesain oleh Misbakhul Munir @hazart29
        </div>
      </div>
    </div>
  );
}

export default App;
