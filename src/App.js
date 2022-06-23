// import Button from "./Button";
import Navbar from "./Navbar";
import Counter from "./Counter";

function App() {
  console.log('render');
  return (
    <div>
      <h1>Hello! welcome back!</h1>
      <Navbar/>  
      <Counter />
      {/* props => text */}
    </div>
  );
}

export default App;
