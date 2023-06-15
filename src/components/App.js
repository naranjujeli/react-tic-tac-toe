import '../css/App.css';
import HeaderSection from './HeaderSection.js';
import GameSection from './GameSection.js';

export default function App() {
  return (
    <div className="App" style={{ backgroundColor: window._backgroundColor }}>
      <HeaderSection />
      <GameSection />
    </div>
  );
}
