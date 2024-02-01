
// import './App.css';
import {Route, Routes} from 'react-router-dom'
import Books from './Pages/Books';
import Add from './Pages/Add';
import Update from './Pages/Update';
import './style.css'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Books />}/>
        <Route path='/add' element={<Add />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
