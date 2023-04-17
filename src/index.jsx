import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/screens/home/Home';
import Layout from './components/layout/Layout';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
);

