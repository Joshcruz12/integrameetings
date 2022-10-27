import "./App.css";
import { Navbar } from "./components";
import Banner from "./components/Banner";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Partners from "./components/Partners";


function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Body />
      <Partners />
      <Form />
      <Footer />
    </>
  );
}

export default App;
