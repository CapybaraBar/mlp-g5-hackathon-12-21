let index = 0;

function generateParams() {
  /*
    const difficultyLevel = Math.floor(Math.random() * 98) + 2;
    const A = useState(Math.floor(Math.random() * (difficultyLevel - 2)) + 2);
    const B = useState(Math.floor(Math.random() * (difficultyLevel - 2)) + 2);
  */
  // Mock data
  const { A, B } = [
    { A: 3, B: 4 },
    { A: 21, B: 13 },
    { A: 30, B: 23 },
    { A: 24, B: 31 },
    { A: 35, B: 5 },
  ][index++ % 5];
  const difficultyLevel = Math.max(A, B);

  return {
    A,
    B,
    difficultyLevel,
  };
}

export default generateParams;
