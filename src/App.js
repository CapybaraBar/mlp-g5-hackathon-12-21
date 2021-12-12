import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Lockscreen from './Lockscreen';
import Training from './Training';
import Settings from './Settings';
import Layout from './Layout';
import generateParams from './generateParams';

const {
  A: initialA,
  B: initialB,
  difficultyLevel: initialDifficultyLevel,
} = generateParams();

function App() {
  const [answer, updateAnswer] = useState('');
  const [difficultyLevel, updateDifficultyLevel] = useState(
    initialDifficultyLevel
  );
  const [A, updateA] = useState(initialA);
  const [B, updateB] = useState(initialB);

  return (
    <Layout
      navigation={
        <table>
          <tbody>
            <tr>
              <td>
                <Link to="/">
                  Режим
                  <br />
                  «Экран блокировки»
                </Link>
              </td>
              <td>
                <Link to="/training">
                  Режим
                  <br />
                  «Обучение»
                </Link>
              </td>
              <td>
                <Link to="/settings">Настройки</Link>
              </td>
            </tr>
          </tbody>
        </table>
      }
    >
      <Switch>
        <Route exact path="/">
          <Lockscreen
            answer={answer}
            updateAnswer={updateAnswer}
            A={A}
            updateA={A}
            B={B}
            updateB={B}
          />
        </Route>
        <Route path="/training">
          <Training
            answer={answer}
            updateAnswer={updateAnswer}
            difficultyLevel={difficultyLevel}
            updateDifficultyLevel={updateDifficultyLevel}
            A={A}
            updateA={updateA}
            B={B}
            updateB={updateB}
          />
        </Route>
        <Route path="/settings">
          <Settings
            difficultyLevel={difficultyLevel}
            updateDifficultyLevel={updateDifficultyLevel}
            answer={answer}
            updateAnswer={updateAnswer}
            A={A}
            updateA={updateA}
            B={B}
            updateB={updateB}
          />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
