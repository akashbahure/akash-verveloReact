import Greet from "./components/Greet";
import Counter from "./components/Counter";
import ShoppingList from "./components/ShoppingList";
import ConditinalExample from "./components/ConditinalExample";
import SimpleForm from "./components/SimpleForm";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h2>Hello React with Ts</h2>
        <h2>---Basic State Example</h2>
        <Counter />
        <h2>---Props</h2>
        <Greet name="Rohit" surname="sharma">
          {/* <p>this is a children</p> */}
        </Greet>
        {/* <Greet name="Karan" surname="verma">
          <button>Action</button>
        </Greet> */}
        {/* <Greet name="arjun" surname="rai" />
        <Greet name="rahul" surname="raj" /> */}

      </div>

      <div>
        <h2>---List Rendering</h2>
        <ShoppingList />
      </div>

      <div className="log">
        <h2>---Conditional Rendering</h2>
      <ConditinalExample />
      </div>

<h2>---Form handling</h2>
      <SimpleForm />
    </>
  );
}

export default App;
