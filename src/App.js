import logo from './logo.svg';
import './App.css';
import Restaurant from './components/Restaurant';
import RestaurantList from './components/RestaurantList';

const data = [
  {
  id: 1,
  name:'Saltys',
  cuisine:'Seafood' ,
  rating: 4.8,
  distance: '5 miles',
  },
  {
  id: 2,
  name:'Toulouse' ,
  cuisine:'Creole' ,
  rating: 3 ,
  distance:'2 miles',
  },
  {
  id: 3,
  name:'Tanoor' ,
  cuisine:'Arab' ,
  rating: 4 ,
  distance:'2.5 miles',
  },
  {
  id: 4,
  name:'Meet' ,
  cuisine:'KBBQ' ,
  rating: 4.5 ,
  distance:'2.5 miles',
  }
];

function App() {
  return (
    <div className="App">
    <RestaurantList data={data} />
    </div>
  );
}

export default App;
