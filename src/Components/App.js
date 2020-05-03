import React from 'react';
import '@/assets/App.css';
import Navbar from '@Components/Navbar/Navbar';
import TodoList from '@Components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <header>
          <Navbar />
      </header>
      <main>
          <div className="block">HHEY</div>
          <TodoList />
      </main>
    </div>
  );
}

export default App;
