import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementLike, decrementLike } from './Actions';

const LikeCounter = () => {
  const likes = useSelector(state => state.likes);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={() => dispatch(incrementLike())}>Like</button>
      <button onClick={() => dispatch(decrementLike())}>Unlike</button>
    </div>
  );
};

export default LikeCounter;