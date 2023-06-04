import GameList from '../components/GameList';
import GameForm from '../components/GameForm';

function WishListPage({ games, onAddGame, onDeleteGame, onEditGame, type }) {
  return (
    <div className='mb-2 mt-3 text-center'>
      <h1 style={{ color: '#630b11', marginBottom: '30px', marginTop: '25px'}}>Buy Next</h1>
      <GameForm onAddGame={onAddGame} type="wishlist" />
      <GameList games={games} onDeleteGame={onDeleteGame} onEditGame={onEditGame} type="wishlist"/>
    </div>
  );
}

export default WishListPage;
