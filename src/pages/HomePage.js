import React from 'react';
import GameList from '../components/GameList';
import GameForm from '../components/GameForm';

function HomePage({ games, onAddGame, onDeleteGame, onEditGame, type }) {
  return (
    <div className='mb-4 mt-3 text-center'>
      <h1 style={{ color: '#630b11', marginBottom: '30px', marginTop: '25px'}}>Currently Playing</h1>
      <GameForm onAddGame={onAddGame} type="home" />
      <GameList games={games} onDeleteGame={onDeleteGame} onEditGame={onEditGame} type="home"/>
    </div>
  );
}

export default HomePage;
