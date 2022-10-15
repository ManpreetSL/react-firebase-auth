import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Vaheguru Jee Kaa Khalsa; Vaheguru Jee Kee Fateh!</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
