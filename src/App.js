import Artist from './component/Artist'

function App() {
  return (
    <div> 
      <h1>Famous Artist of All Time</h1>
      <Artist text='Vincent Van Gogh'/>
      <Artist text='Leonardo Da Vinci'/>
      <Artist text='Claude Monet'/>
    </div>
  );
}

export default App;
