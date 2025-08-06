import Greet from "./components/Greet";
import Counter from "./components/Counter";
import ShoppingList from "./components/ShoppingList";
import ConditinalExample from "./components/ConditinalExample";
import SimpleForm from "./components/SimpleForm";
import "./App.css";
import { UserProvider } from "./contextApi/UserContext";
import Login from "./contextApi/Login";
import Profile from "./contextApi/Profile";
import HookCounterObject from "./components/HookCounterObject";
import HookCounterOne from "./components/HookCounterOne";

const App:React.FC=() =>{
  return (
    <>
    <UserProvider>
      <h2>---context Api Example</h2>
      <Login />
      <Profile />
    </UserProvider>
      <div className="App">
        {/* <h2>Hello React with Ts</h2> */}
        <h2>---Basic State Example</h2>
        <Counter />
        <HookCounterObject />
        <h2>--useEffect</h2>
        <HookCounterOne />
 
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
