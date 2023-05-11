import PropTypes from 'prop-types';




Anime.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  id:PropTypes.number
};


function Anime(props) {
    
  return (
    <>
    <h2 className='heading2'>Upcoming Anime...</h2>
    <div className= "grid lg-5">
     
        
      
    {props.animes.map(anime => (
        <figure key={anime.id}>
        <img alt={anime.name} src= {anime.image} />
        <p> {anime.name}
        </p>
        </figure>
    ))}
    </div>
    </>
  )
}

export default Anime