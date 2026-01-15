import { Routes, Route } from 'react-router-dom';
import FormPage from './pages/FormPage';
import CounterPage from './pages/CounterPage';
import Navbar from './components/Navbar';
import TodoPage from './pages/TodoPage';
import './App.css'


function App() {

  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/todos" element={<TodoPage />} />
      </Routes> 
    </div>
  )
  
}

export default App
