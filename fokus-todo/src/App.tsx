import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';
import Timer from './components/Timer/Timer';

function App() {

  return (
    <div>
      <Header />
      <Timer />
      <Tasks />
      <Footer />
    </div>
  )
}

export default App;

