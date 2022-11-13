import "./App.css";
import "bulma/css/bulma.min.css";
import CreateMember from "./Components/CreateMember";
import Hero from "./Components/Hero";
import ReadMember from "./Components/ReadMember";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <h1 className="title is-2 has-text-centered">Ajouter un(e) Argonaute</h1>
      <CreateMember />
      <ReadMember />
      <Footer />
    </div>
  );
}

export default App;
