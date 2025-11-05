import './App.css';
// import NavbarItem from "./components/head/Navbar";
import Home from './components/body/Home';
// import Footer from './components/head/Footer';

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      {/* <NavbarItem /> */}
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
