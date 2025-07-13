import Header from './components/Header'
import Entry from './components/Entry';
import data from './data'
import './App.css'

function App() {
const destinations = data.map((p)=>(
    <Entry
        key={p.id}
        {...p}
      />
))
  return (
    <>
      <Header />
      {destinations}
    </>
  );
}

export default App
