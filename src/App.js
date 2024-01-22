import './App.css';
import Header from './Components/Header/Header';
import CreateNode from './Components/CreateNote/CreateNote'
import Notes from './Components/Notes/Notes'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      < Header />
      <CreateNode/>
      <Notes />
      <Footer />
    </ >
  );
}

export default App;
