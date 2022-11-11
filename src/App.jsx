import { Outlet } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <header className='App-header'>
          <h1>Vaheguru Jee Kaa Khalsa; Vaheguru Jee Kee Fateh!</h1>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
