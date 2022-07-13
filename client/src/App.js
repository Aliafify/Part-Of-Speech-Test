import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Words from './components/words';
import Rank from './components/Rank';
import axios from 'axios';
import Context from './components/Context';
function App() {
  const [rank, setRank] = useState([]);
  useEffect(() => {
    getRank(null);
  }, [])
  const getRank = (r) => {
    axios.post('/rank', { scores: r }).then((res) => { setRank(res.data.rank) })

  }
  return (
    <Context.Provider value={{ getRank: [getRank] }}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Words rank={rank} />} />
          <Route path="/rank" element={<Rank rank={rank} />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>

  );
}

export default App;
