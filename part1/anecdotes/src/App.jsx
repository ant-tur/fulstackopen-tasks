import { useState } from 'react';

const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Anecdote = ({ anecdotes, countVotes, index }) => {
  return (
    <>
      <div>{anecdotes[index]}</div>
      <div>has {countVotes[index]} votes</div>
    </>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [countVotes, setCountVotes] = useState(
    new Array(anecdotes.length).fill(0)
  );

  const handleClick = () => {
    setSelected(getRandomNumber(anecdotes.length));
  };

  const addVote = () => {
    const copy = [...countVotes];
    copy[selected] += 1;
    setCountVotes(copy);
  };

  const maxCountVotes = Math.max(...countVotes);
  const indexMax = countVotes.findIndex((item) => item === maxCountVotes);

  return (
    <>
      <div>
        <h2>Anecdote of the day</h2>
        <Anecdote
          anecdotes={anecdotes}
          countVotes={countVotes}
          index={selected}
        />
        <Button text="vote" onClick={addVote} />
        <Button text="next anecdotes" onClick={handleClick} />
      </div>
      <div>
        <h2>Anecdote with most votes</h2>

        {maxCountVotes === 0 ? (
          <div>No votes yet</div>
        ) : (
          <Anecdote
            anecdotes={anecdotes}
            countVotes={countVotes}
            index={indexMax}
          />
        )}
      </div>
    </>
  );
};

export default App;
