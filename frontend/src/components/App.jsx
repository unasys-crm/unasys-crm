// frontend/src/App.jsx
import React from 'react';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🚀 Unasys CRM</h1>
      <p>Frontend pronto para integração com o backend.</p>
    </div>
  );
}

export default App;

import ModelosMensagens from './pages/ModelosMensagens';

<Route path="/modelos" element={<ModelosMensagens />} />
