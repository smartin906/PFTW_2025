import { Link } from 'react-router-dom'
import musicData from '../assets/music-list.json'
export function Home() {
  return (
    <>
      <div className="home">
        <h1>Welcome to the Music App</h1>
        <p>Discover your favorite songs and artists.</p>
        {musicData.map((song) => {
          return (
            <div key={song.slug} className="song">
              <img src={song.cover} alt={song.title} />
              <p><Link to={`${song.slug}`}>{song.title} by {song.artist}</Link></p>
            </div>
          );
        })}
      </div>
    </>
  )
}