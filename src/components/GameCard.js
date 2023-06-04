  import React, { useState } from 'react';
  import { Card, ProgressBar, Button, Form } from 'react-bootstrap';
  import '../App.css';


  function GameCard({ game, onDeleteGame, onEditGame, type, index }) {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(game.title);
    const [platform, setPlatform] = useState(game.platform);
    const [progress, setProgress] = useState(game.progress);

    const handleEdit = () => { 
      setEditing(true);
    };

    const handleSave = () => {
      onEditGame({ id: game.id, title, platform, progress: Number(progress) });
      setEditing(false);
    };

    const handleCancel = () => {
      setTitle(game.title);
      setPlatform(game.platform);
      setProgress(game.progress);
      setEditing(false);
    };

    const colors = ["#fce4b3", "#96b0e3", "#f5ba9d"]; // yellow , blue , red 
    const cardColor = colors[index % colors.length]; // Alternates card colors

    return (
      <Card style={{ width: '18rem', marginTop: '15px', backgroundColor: cardColor, fontFamily: 'Roboto', fontWeight: 'bold'}}>
        <Card.Body>
          {editing ? (
            <>
              <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
              <Form.Control type="text" value={platform} onChange={e => setPlatform(e.target.value)} />
              {type === 'home' && (
                <Form.Control type="text" value={progress} onChange={e => setProgress(e.target.value)} />
              )}
                <Button variant="primary" className="custom-button" onClick={handleSave}>Save</Button>
                <Button variant="secondary" className="custom-button" onClick={handleCancel}>Cancel</Button>
            </>
          ) : (
            <>
              <Card.Title>{game.title}</Card.Title>
              <Card.Text>Platform: {game.platform}</Card.Text>
              {type === 'home' && (
                <ProgressBar now={game.progress} label={`${game.progress}%`} bg='dark' className="custom-progress" style={{ marginBottom: '10px', backgroundColor: '#56585c' }} />
              )}
                <Button variant="primary" className="custom-button" onClick={handleEdit}>Edit</Button>
                <Button variant="danger" className="custom-button" onClick={() => onDeleteGame(game.id)}>Delete</Button>
            </>
          )}
        </Card.Body>
      </Card>
    );
  }

  export default GameCard;
