import { useState } from "react";
import ArtistPage from "./pages/ArtistPage";
import ProgrammerPage from "./pages/ProgrammerPage";

function App() {
  const [people, setPeople] = useState('artists')

  switch(people) {
    case 'artists':
      return <ArtistPage changePage={() =>{ setPeople('programmers') }}/>
    case 'programmers':
      return <ProgrammerPage changePage={() =>{ setPeople('artists') }}/>
  }
}

export default App;
