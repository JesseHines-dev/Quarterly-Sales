import './App.css';
import TButtons from './components/table-head.js';
import TGrid from './components/table-grid.js';
import Tmain from './components/table.js';

function App() {
  return (

    <div className="App">
      <TButtons />
      <TGrid />
      <Tmain />
    </div>
  );
}

export default App;
