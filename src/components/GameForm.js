import { useState } from 'react';

const GameForm = ({ onAddGame, type }) => { 
  const [title, setTitle] = useState(''); // title is the state, setTitle is the function that updates the state
  const [platform, setPlatform] = useState('');
  const [progress, setProgress] = useState('');

  const handleSubmit = (e) => { // e is the event object
    e.preventDefault();
    onAddGame({ title, platform, progress: Number(progress) }); // onAddGame is the function passed down from the parent
    setTitle(''); // resets the form
    setPlatform('');
    if(type === 'home') setProgress(''); // only resets progress if the type is home
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '1px 0', padding: '1px 0', minHeight: '50px' }}>
      <input 
        type="text" 
        placeholder="Game Title"
        value={title}
        onChange={e => setTitle(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Platform"
        value={platform}
        onChange={e => setPlatform(e.target.value)} 
      />
    {type === 'home' && (
        <input 
          type="text" 
          placeholder="Progress"
          value={progress}
          onChange={e => setProgress(e.target.value)} 
        />
      )}
      <button type="submit">Add Game</button>
    </form>
  );
};

export default GameForm;
