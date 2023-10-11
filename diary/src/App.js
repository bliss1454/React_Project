import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h2>App.js</h2>

        <img src={Process.env.PUBLIC URL + '/assets/happy.png'}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/edit' element={<Edit/>}/>
          <Route path='/diary/:id' element={<Diary/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
