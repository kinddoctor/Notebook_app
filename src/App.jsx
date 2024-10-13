import React from 'react';
import Notebook from './components/Notebook.jsx';
import AddingForm from './components/AddingForm.jsx';

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-content-center h-100">
      <Notebook />
      <AddingForm />
    </div>
  )
}

export default App;
