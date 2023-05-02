
import './App.css';
import {useEffect,useState} from "react"
import Axios from "axios"

function App() {

  const [user,setUser] = useState([])

  const [name,setName] = useState("")
  useEffect(() =>{
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setUser(res.data))
  })
  return (
    <div className="App">
      <h1>LIVE SEARCH FILTER</h1>
      <input type="text" placeholder='ENTER NAME....' value={name} onChange={e =>{
        setName(e.target.value)
      }}/>
       {name.length > 0 && user.map(((e,i) =>(
        <div key={i}>
        {e.name.toLowerCase().includes(name.toLowerCase()) ? e.name : ""}
        </div>
       )))}
      
    </div>
  );
}

export default App;
