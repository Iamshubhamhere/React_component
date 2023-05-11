
import './Styles/index.css';
import Anime from './Components/Anime';
import Header from './Components/Header'
import Banner from './Components/Banner'
import Footer from './Components/Footer'

let Heading = 'Anime Zone';


const animes = [
  {
      name:"One piece",
      id:1001,
      image:"https://m.media-amazon.com/images/I/81rEhhwbubL.jpg"
  },
  {
    
    name:"Naruto",
    id:1002,
    image:"https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
  },
 {
  name:"Demon Slayer",
    id:1003,
    image:"https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg"
 },
 
 {
  name:"Death Note",
    id:1004,
    image:"https://flxt.tmsimg.com/assets/p12981153_b_v8_aa.jpg"
 },
 {
  name:"Black Clover",
    id:1005,
    image:"https://assets1.ignimgs.com/2018/07/13/black-clover---button-2018-1531524821312.jpg"
 }
];

function App() {
  return (
    <>
    <Header
    />
    <main>
    
    <div className="container">
      <section className='upper'>
    <Banner 
    Heading = {Heading} 
    />
    </section>
    <section className='Lower'>
    <Anime 
    
    animes ={animes}/>
    </section>
    </div>
    </main>
    <Footer />
    </>
  );
}

export default App;
