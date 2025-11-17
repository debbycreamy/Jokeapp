import Header from './pages/Header/Header'
import Contact from './pages/contactPage/Contact'
import { BrowserRouter, Link,Routes,Route } from 'react-router-dom'
import UseState1 from './Usestate/UseState1'  
import Ausestate from './AssUsestate/Ausestate'  
import UseEffect1 from './UseEffect/UseEffect1'
import Form1 from './Form/Form1'
import JokeApp from "./pages/aboutPage/JokeApp";

function App() {
  return (

    <BrowserRouter>
      <nav>
        <Link to="/"></Link>
        <Link to="/Page1"></Link>
        <Link to="/Contact"></Link>
        <Link to="/UseState1"></Link>
        <Link to="/Ausestate"></Link>
        <Link to="/UseEffect1"></Link>
        <Link to="/Form1"></Link>
        <Link to="/JokeApp"></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/Page1" element={<Page1 />} /> */}
        <Route path="/Contact" element={<Contact />} />
        <Route path="/UseState1" element={<UseState1 />} />
        <Route path="/Ausestate" element={<Ausestate />} />
        <Route path="/UseEffect1" element={<UseEffect1 />} />
        <Route path="/Form1" element={<Form1 />} />
        <Route path="/JokeApp" element={<JokeApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
  

