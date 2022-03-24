import './App.css';
import FirstClient from './client1'
import SecondClient from './client2'


const clientNumber = process.env.REACT_APP_CLIENT_NUMBER


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {clientNumber == 1 ? <FirstClient /> : undefined}
        {clientNumber == 2 ? <SecondClient /> : undefined}
      </header>
    </div>
  );
}

export default App;
