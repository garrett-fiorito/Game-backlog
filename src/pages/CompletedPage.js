import GameList from '../components/GameList';
import GameForm from '../components/GameForm';

function CompletedPage({ games, onAddGame, onDeleteGame, onEditGame, type }) {
  return (
    <div className='mb-2 mt-3 text-center'>
      <h1 style={{ color: '#630b11', marginBottom: '30px', marginTop: '25px'}}>Next To Play</h1>
      <GameForm onAddGame={onAddGame} type='completed' />
      <GameList games={games} onDeleteGame={onDeleteGame} onEditGame={onEditGame} type='completed'/>
    </div>
  );
}

export default CompletedPage;