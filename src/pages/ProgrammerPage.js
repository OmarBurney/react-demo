import React from 'react'
import Person from '../component/Person'

export default function ProgrammerPage({changePage}) {
    
  const programmers =[
    {
      name: 'Alan Turing',
      video: 'https://www.youtube.com/embed/gtRLmL70TH0?start=130'
    },
    {
      name: 'Linus Torvalds',
      video: 'https://www.youtube.com/embed/o8NPllzkFhE?start=97'
    },
    {
      name: 'Ada Lovelace',
      video: 'https://www.youtube.com/embed/InyyT4OiYFY?start=63'
    }
  ]

  
  return (
    <div> 
      <h1>Famous Programmers of All Time</h1>
      {
        programmers.map((programmer) => {
          return <Person text={programmer.name} video={programmer.video} />
        })
      }
      <br />
      <button className='btn btn-next' onClick={changePage}>View Programmers</button>
    </div>
  )
}