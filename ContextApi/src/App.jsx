import React from 'react';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
