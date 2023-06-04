import GameCard from './GameCard';

const GameList = ({ games, onDeleteGame, onEditGame, type, index }) => {
  return (
    <div className="container">
      <div className="row">
        {games.map((game, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mt-3" key={index}>
            <GameCard key={game.id} game={game} onDeleteGame={onDeleteGame} onEditGame={onEditGame} type={type} index={index}/>
          </div>
        ))}
      </div>
    </div>
  );
};
  
export default GameList;
