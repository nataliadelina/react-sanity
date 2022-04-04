import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import Navbar from './components/navbar/Navbar.js'
import './css/App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
