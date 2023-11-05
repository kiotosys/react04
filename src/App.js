import { BrowserRouter as Router } from 'react-router-dom';
import BarraRutasPublic from './ruteo/BarraRutasPublic';
import BarraRutasProtected from './ruteo/BarraRutasProtected';
import { useAuth } from "./ruteo/AuthContext";

//style={{background:"violet", width:"350px", padding:"10px"}}
function App() {
  const {user } = useAuth();
  return (
    <div>
      <h1>App.js</h1>
      <i class="large material-icons">insert_chart</i>
      <Router>
        { user ?  <BarraRutasProtected /> : <BarraRutasPublic />}
      </Router>
    </div>
  );
}
 
export default App;
