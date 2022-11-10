import "./App.css";
import "bulma/css/bulma.min.css";
import CreateMember from "./CreateMember";
import Hero from "./Hero";

function App() {
  return (
    <div className="App">
      <Hero />
      <h1 className="title is-2 has-text-centered">Ajouter un(e) Argonaute</h1>
      <CreateMember />
    </div>
  );
}

export default App;
