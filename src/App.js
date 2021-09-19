import './App.css';
import './reset.css';

import NavBar from './components/NavBar.js';
import CreatorCard from './components/CreatorCard.js'
import PhotoCard from './components/PhotoCard.js';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <CreatorCard />
      <PhotoCard />
    </div>
  );
}

export default App;
