import "./App.css";
import "bulma/css/bulma.min.css";
import CreateMember from "./CreateMember";
import Hero from "./Hero";
import ReadMember from "./ReadMember";

function App() {
  return (
    <div className="App">
      <Hero />
      <h1 className="title is-2 has-text-centered">Ajouter un(e) Argonaute</h1>
      <CreateMember />
      <ReadMember />
    </div>
  );
}

export default App;
