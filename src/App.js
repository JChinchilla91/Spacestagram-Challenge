import './App.css';
import './reset.css';

import NavBar from './components/NavBar.js';
import LeftColumn from './components/LeftColumn.js'
import RightColumn from './components/RightColumn';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='Content'>
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}

export default App;
