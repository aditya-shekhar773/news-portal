import './App.css';
import Header from './components/Header';
import InsertNews from './components/InsertNews';
import Layuot from './components/Layuot';
import category from './data/category';
import news from './data/news';
import {Routes, Route} from "react-router-dom"
import ReadNews from './components/ReadNews';
function App() {
  return (
   <>
    <Header/>
    <Routes>
      <Route path="/" element={<Layuot category={category} news={news}/>}/>
      <Route path="/insert" element={<InsertNews/>}/>
      <Route path="/read/:id" element={<ReadNews/>}/>
    </Routes>
   </>
  );
}

export default App;
