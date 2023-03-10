
import axios from "axios";
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Layout from "./Layout.js";
import IndexPage from './pages/IndexPage.js';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from "./pages/RegisterPage.js";

axios.defaults.baseURL='http://localhost:4000'
axios.defaults.withCredentials=true;
function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>

  <Route index element={<IndexPage/>}/>
  <Route path='/login' element={<LoginPage />} />
  <Route path='/register' element={<RegisterPage />} />

    </Route>
    
    </Routes>
    </BrowserRouter>
    );
}

export default App;
