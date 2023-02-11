
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Layout from "./Layout.js";
import IndexPage from './pages/IndexPage.js';
import LoginPage from './pages/LoginPage.js';

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>

  <Route index element={<IndexPage/>}/>
  <Route path='/login' element={<LoginPage />} />
    </Route>
    
    </Routes>
    </BrowserRouter>
    );
}

export default App;
