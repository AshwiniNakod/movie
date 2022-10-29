import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const incrementlike = () => setLike(like + 1);
  const incrementDislike = () => setDislike(dislike + 1);
  return (
    <div>
      {/* <button onClick={()=>{setLike(like+1)}}>👍{like}</button> */}

      <IconButton onClick={incrementlike} aria-label="like" color="primary">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton onClick={incrementDislike} aria-label="dis like" color="primary">
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
      {/* <button onClick={()=>{setDislike(dislike+1)}}>👎{dislike}</button> */}

      {/* <p>{num}</p> */}
    </div>
  );
}
