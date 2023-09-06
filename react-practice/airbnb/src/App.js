import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import Data from './Data';

function App() {
  const cards = Data.map(item => {
    return (
      <Card 
                key={item.id}
                item={item}
            />
    )
  })

          
  return (
    <div className="App">
      <Navbar />
       <Hero />
      <section className="cards--list">
          {cards}
      </section>
    </div>
  );
}

export default App;
