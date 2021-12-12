import React from 'react';

import Clock from './Clock';
import Weather from './Weather';

function Lockscreen({ A, B, answer, updateAnswer }) {
  return (
    <div className="Lockscreen">
      <div className="Lockscreen-components">
        <div>
          <Clock />
          <Weather />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <h2>
            Сколько будет {A} x {B}?
          </h2>
          <input
            value={answer}
            onChange={({ target: { value } }) => updateAnswer(value)}
          />
          <br />
          <br />
          <button
            onClick={() => {
              if (+A * +B !== +answer) {
                if (
                  window.confirm(
                    'Вы ввели неправильный ответ. Вы хотите перейти к обучению?'
                  )
                ) {
                  window.location = '/training';
                }
              } else {
                window.alert('Вы успешно разблокировали телефон! Поздравляем!');
              }
            }}
          >
            Проверить решение
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lockscreen;
