import './App.css';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import RegisterPage from './pages/registerPage';

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <RegisterPage />
      <Footer />
    </>
  );
}

export default App;
