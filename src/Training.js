import React from 'react';
import { useHistory } from 'react-router-dom';

import generateParams from './generateParams';

function Training({
  A,
  B,
  answer,
  updateAnswer,
  updateA,
  updateB,
  updateDifficultyLevel,
}) {
  const history = useHistory();
  return (
    <div>
      <div>
        A = {A}, B = {B}
        {answer == '' ? null : <div>Вы ввели: {answer}</div>}
        <br />
        Правильный ответ: {+A * +B}
      </div>
      <br />
      <div>
        Решение:
        <div>
          <video
            width="400"
            height="320"
            controls={false}
            autoPlay={true}
            playsInline={true}
          >
            <source
              src={`/${A}x${B}.mp4`}
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
          </video>
        </div>
      </div>
      <button
        onClick={() => {
          const { A, B, difficultyLevel } = generateParams();
          updateAnswer('');
          updateA(A);
          updateB(B);
          updateDifficultyLevel(difficultyLevel);
          history.push('/');
        }}
      >
        Попробовать еще раз
      </button>
    </div>
  );
}

export default Training;
