import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Banner from './components/Banner';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Banner text={'Special flight offers – book by 20 May'} />
    <Header />
    <Menu />
    <App />
    <Footer />
  </React.StrictMode>
);
