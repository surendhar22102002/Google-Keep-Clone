import CreateNotes from "./Components/CreateNote/CreateNotes";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Note from "./Components/Note/Note";

function App() {
  return (
    <>
      <div>
        <Header />
        <CreateNotes />
        <div className="md:px-[50px]">
          <Note />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
