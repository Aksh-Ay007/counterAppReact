import logo from './logo.svg';
import './App.css';
import Counter from './counter';

function App() {
  return (
   <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>

    <h1>counter App</h1>
    <Counter/>
   </div>
  );
}

export default App;
