import Header from './components/Header/Header'
import PersonInfo from './components/PersonInfo/PersonInfo';
import data from './data';


function App() {


  return (
    <div>
      <Header />
      <PersonInfo data={data} />

    </div>

  )
}

export default App
