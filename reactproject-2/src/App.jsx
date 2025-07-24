import Usercard from "./component/usercard";
import "./App.css"
import vikashpic from './assets/vikashkumar.png'

import Maharana from "./assets/maharanapratap.png"
import Prithviraj from "./assets/prithviraj.png"

function App() {
  return (
    <div className="container">
      <Usercard name='vikash kumar' desc="description of vikash kumar" image={vikashpic} />
      <Usercard name='Maharana Pratap' desc="description of Maharana Pratap"image={Maharana} />
      <Usercard name='Prithviraj' desc="description of Prithviraj" image={Prithviraj}/>
    </div>
  );
}

export default App;
