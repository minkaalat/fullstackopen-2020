import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Title = ({ text }) => <h1>{text}</h1>;
const Display = ({ text }) => <div>{text}</div>;

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(6).fill(0));
  const [mostVotes, setMostVotes] = useState(0);

  const arvoNumero = () =>
    setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)));

  const vote = () => {
    const copyOfVotes = [...votes];
    let newVote = copyOfVotes[selected];
    newVote++;
    copyOfVotes[selected] = newVote;
    setVotes(copyOfVotes);

    let most = mostVotes;
    if (newVote > copyOfVotes[mostVotes]) {
      most = selected;
    }
    setMostVotes(most);
  };

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Display text={props.anecdotes[selected]} />
      <Display text={"has " + votes[selected] + " votes"} />
      <Button onClick={vote} text="vote" />
      <Button onClick={arvoNumero} text="next anecdote" />
      <Title text="Anecdote with most votes" />
      <Display text={props.anecdotes[mostVotes]} />
      <Display text={"has " + votes[mostVotes] + " votes"} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
