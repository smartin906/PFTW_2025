import { Link, useParams } from 'react-router-dom';
export function Song({data}) {
  const {slug} = useParams();
  console.log("slug", slug);
  const selectedSong = data.find((song) => song.slug === slug)
  console.log(selectedSong)
  return (
    <div className="song">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>{selectedSong.title}</h1>
      <img src={selectedSong.cover} alt={selectedSong.title} />
      <p><strong>Artist:</strong> {selectedSong.artist}</p>
      <p><strong>Rank:</strong> {selectedSong.rank}</p>


      
    </div>
  )
}