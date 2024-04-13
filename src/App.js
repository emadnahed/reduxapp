import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Secondary from './components/Secondary';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Shop/>      
      <Secondary/>      
    </div>
    </>
  );
}

export default App;
