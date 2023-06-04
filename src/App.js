import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompletedPage from './pages/CompletedPage';
import WishListPage from './pages/WishlistPage';
import './App.css';


function App() { // Root component; Contains the NavBar and the Routes.
  const [homeGames, setHomeGames] = useState(() => { // State for the games in the home page
    const localData = localStorage.getItem('homeGames'); // Get the data from local storage
    return localData ? JSON.parse(localData) : []; // If there is data, parse it to JSON, else return an empty array
  });

  const [completedGames, setCompletedGames] = useState(() => { // State for the games in the completed page
    const localData = localStorage.getItem('completedGames');
    return localData ? JSON.parse(localData) : [];
  });

  const [wishlistGames, setWishlistGames] = useState(() => { // State for the games in the wishlist page
    const localData = localStorage.getItem('wishlistGames');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('homeGames', JSON.stringify(homeGames));
    localStorage.setItem('completedGames', JSON.stringify(completedGames)); 
    localStorage.setItem('wishlistGames', JSON.stringify(wishlistGames));
  }, [homeGames, completedGames, wishlistGames]); // Save the data to local storage when the state changes

  const addHomeGame = (game) => { // Add a game to the home page
    const newGame = { ...game, id: Date.now() };
    setHomeGames([newGame, ...homeGames]); // Add the new game to the state
  };

  const addCompletedGame = (game) => { // Add a game to the completed page
    const newGame = { ...game, id: Date.now() };
    setCompletedGames([newGame, ...completedGames]); 
  };

  const addWishlistGame = (game) => { // Add a game to the wishlist page
    const newGame = { ...game, id: Date.now() };
    setWishlistGames([newGame, ...wishlistGames]);
  };

  const deleteHomeGame = (id) => { // Delete a game from the home page
    setHomeGames(homeGames.filter(game => game.id !== id)); // Filter out the game with the id that was clicked on
  };
  
  const deleteCompletedGame = (id) => { // Delete a game from the completed page
    setCompletedGames(completedGames.filter(game => game.id !== id));
  };
  
  const deleteWishlistGame = (id) => { // Delete a game from the wishlist page
    setWishlistGames(wishlistGames.filter(game => game.id !== id));
  };

  // Edit functions
  const editHomeGame = (updatedGame) => { // Edit a game from the home page
    setHomeGames(homeGames.map((game) => (game.id === updatedGame.id ? updatedGame : game)));
  }; // Map over the games and replace the game with the id that was clicked on
  
  const editCompletedGame = (updatedGame) => {
    setCompletedGames(completedGames.map((game) => (game.id === updatedGame.id ? updatedGame : game)));
  }; // Map over the games and replace the game with the id that was clicked on
  
  const editWishlistGame = (updatedGame) => {
    setWishlistGames(wishlistGames.map((game) => (game.id === updatedGame.id ? updatedGame : game)));
  };

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage games={homeGames} onAddGame={addHomeGame} onDeleteGame={deleteHomeGame} onEditGame={editHomeGame}/>} />
        <Route path="/completed" element={<CompletedPage games={completedGames} onAddGame={addCompletedGame} onDeleteGame={deleteCompletedGame} onEditGame={editCompletedGame}/>} />
        <Route path="/wishlist" element={<WishListPage games={wishlistGames} onAddGame={addWishlistGame} onDeleteGame={deleteWishlistGame} onEditGame={editWishlistGame}/>} />
      </Routes>
    </Router>
  );
}

export default App;
