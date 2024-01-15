import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us"/>
    <div className="container my-3">
    <TextForm heading="Enter the text for analyse below"/>
    </div>
    </>
  );
}

export default App;
