import React from 'react'
import Person from '../component/Person'

export default function ArtistPage({changePage}) {
    
  const artists =[
    {
      name: 'Vincent Van Gogh',
      video: 'https://www.youtube.com/embed/KlBG2ojDbQ8?start=1273'
    },
    {
      name: 'Leonardo Da Vinci',
      video: 'https://www.youtube.com/embed/XjcJG0YQSds?start=102'
    },
    {
      name: 'Claude Monet',
      video: 'https://www.youtube.com/embed/pP1uXYT8n_M?start=111'
    }
  ]

  
  return (
    <div> 
      <h1>Famous Artist of All Time</h1>
      {
        artists.map((artist) => {
          return <Person text={artist.name} video={artist.video} />
        })
      }
      <br />
      <button className='btn btn-next' onClick={changePage}>View Programmers</button>
    </div>
  )
}