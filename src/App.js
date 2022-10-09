import Galery from "./Components/Galery";
import Header from "./Components/Header";
import data from "./Data";

function App() {
  return (
    <>
      <Header />
      <div className="pictures">
        {data.map((person) => (
          <Galery 
          key={person.photographer} 
          photographer={person.photographer} 
          src={person.src.large} 
          />
        ))}
        <Galery />
      </div>
    </>
  );
}

export default App;
