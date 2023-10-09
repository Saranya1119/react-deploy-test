// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div>

//     </div>
//   );
// }

// export default App;




import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import { Footer } from './components/Footer';
import Nav from './components/Nav';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Blog, Projects, Contact } from "./components/Main";


function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>


    </div>
  );
}

export default App;




