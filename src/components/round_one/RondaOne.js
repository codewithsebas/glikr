import React from "react";
import "./RondaOne.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import Question from "../BD/DataRoundOne";
import QuestionsTwo from "../BD/DataRoundTwo";
import QuestionsThree from "../BD/DataRoundThree";
import QuestionsFour from "../BD/DataRoundFour";
import QuestionsFive from "../BD/DataRoundFive";

const RondaOne = () => {
  const [dataPlayer, setDataPlaye] = useState(false);

  const [roundOne, setRoundOne] = useState(false);

  const [name, setName] = useState("");

  const player = ({ target }) => {
    setName(target.value);
  };

  localStorage.setItem("Player", name);

  let playerName = localStorage.getItem("Player");

  const save = () => {
    const input = document.querySelector(".input");

    if (name === "") {
      input.classList.add("name");
    } else {
      setRoundOne(true);
    }
  };

  // State of question actual!
  const [questionPresent, setQuestionPresent] = useState(0);
  // Punctuation ++!
  const [punctuation, setPunctuation] = useState(0);
  localStorage.setItem("Puntuaction", punctuation);
  // State of screen of Punctuation!
  const [finish, setFinish] = useState(false);
  // State of screen of Winner!
  const [finishRounds, setFinishRounds] = useState(false);
  // State of scren of Game Over!
  const [gameOver, setGameOver] = useState(false);

  // Function of State Initial
  function answerSubmit(isCorrect, e) {
    // Condition to know if the answer is correct ++2 Points
    if (isCorrect) setPunctuation(punctuation + 2);

    // Condition to know if the answer is correct
    e.target.classList.add(isCorrect ? "select" : "disabled");

    // Function Timeout, for see in 3s
    setTimeout(() => {
      // Condition to know the number of the question and go to the next
      if (questionPresent === Question.length - 1) {
        // If you finish all 5 questions, the points obtained screen will appear and in 3 seconds you will go to the next round.
        setFinish(true);
        setTimeout(() => {
          setFinish(false);
          setRoundTwo(true);
        }, 3000);
      } else {
        // If not then keep going through the questions up to number 5
        setQuestionPresent(questionPresent + 1);
      }

      // If the answer is false then show the Game Over screen in second half
      if (isCorrect === false) {
        setGameOver(true);
      }
    }, 1500);
  }

  // States of Rounds!

  const [questionPresentRoundTwo, setQuestionPresentRoundTwo] = useState(0);
  const [roundTwo, setRoundTwo] = useState(false);

  const [questionPresentRoundThree, setQuestionPresentRoundThree] = useState(0);
  const [roundThree, setRoundThree] = useState(false);

  const [questionPresentRoundFour, setQuestionPresentRoundFour] = useState(0);
  const [roundFour, setRoundFour] = useState(false);

  const [questionPresentRoundFive, setQuestionPresentRoundFive] = useState(0);
  const [roundFive, setRoundFive] = useState(false);

  // Function for next round
  function answerSubmitTwo(isCorrect, e) {
    if (isCorrect) setPunctuation(punctuation + 2);

    e.target.classList.add(isCorrect ? "select" : "disabled");

    setTimeout(() => {
      if (questionPresentRoundTwo === Question.length - 1) {
        setFinish(true);
        setTimeout(() => {
          setFinish(false);
          setRoundTwo(false);
          setRoundThree(true);
        }, 3000);
      } else {
        setQuestionPresentRoundTwo(questionPresentRoundTwo + 1);
      }

      if (isCorrect === false) {
        setGameOver(true);
      }
    }, 1500);
  }

  // Function for next round

  function answerSubmitThree(isCorrect, e) {
    if (isCorrect) setPunctuation(punctuation + 2);

    e.target.classList.add(isCorrect ? "select" : "disabled");

    setTimeout(() => {
      if (questionPresentRoundThree === Question.length - 1) {
        setFinish(true);
        setTimeout(() => {
          setFinish(false);
          setRoundTwo(false);
          setRoundThree(false);
          setRoundFour(true);
        }, 3000);
      } else {
        setQuestionPresentRoundThree(questionPresentRoundThree + 1);
      }

      if (isCorrect === false) {
        setGameOver(true);
      }
    }, 1500);
  }

  // Function for next round

  function answerSubmitFour(isCorrect, e) {
    if (isCorrect) setPunctuation(punctuation + 2);

    e.target.classList.add(isCorrect ? "select" : "disabled");

    setTimeout(() => {
      if (questionPresentRoundFour === Question.length - 1) {
        setFinish(true);
        setTimeout(() => {
          setFinish(false);
          setRoundFour(false);
          setRoundFive(true);
        }, 3000);
      } else {
        setQuestionPresentRoundFour(questionPresentRoundFour + 1);
      }

      if (isCorrect === false) {
        setGameOver(true);
      }
    }, 1500);
  }

  // Function for next round

  function answerSubmitFive(isCorrect, e) {
    if (isCorrect) setPunctuation(punctuation + 2);

    e.target.classList.add(isCorrect ? "select" : "disabled");

    setTimeout(() => {
      if (questionPresentRoundFive === Question.length - 1) {
        setFinishRounds(true);
      } else {
        setQuestionPresentRoundFive(questionPresentRoundFive + 1);
      }

      if (isCorrect === false) {
        setGameOver(true);
      }
    }, 1500);
  }

  // Screen for game over

  if (gameOver)
    return (
      <>
        <div className="containerOver">
          <div className="finish">
            <div className="titleOver">GAME OVER!!</div>
            <div className="points">
              Jugador : {playerName} <br />
              Puntos : {punctuation}!
            </div>
          </div>
          <div className="overRestart">
            <button
              className="restart"
              onClick={() => (window.location.href = "/")}
            >
              Restart
            </button>
          </div>
        </div>
      </>
    );

  // Screen for see the points

  if (finish)
    return (
      <div className="containerFinish">
        <div className="finish">
          <div className="titleFinish">FELICIDADES!!</div>
          <div className="points">
            Bien hecho, llevas {punctuation} puntos!! 😎
          </div>
        </div>
      </div>
    );

  // Screen of winner

  if (finishRounds)
    return (
      <div className="containerFinishRounds">
        <div className="finish">
          <div className="titleFinish">FELICIDADES GANASTE!!</div>
          <div className="points">
            Obtuviste {punctuation} puntos!! <br /> 😎
          </div>
        </div>
        <div className="overRestart">
          <button
            className="restart"
            onClick={() => (window.location.href = "/")}
          >
            Restart
          </button>
        </div>
      </div>
    );

  if (dataPlayer)
    return (
      <div className="containerFinishRounds">
        <div className="finish">
          <div className="titleFinish">Tus datos!!</div>
          <div className="points">
            Jugador : {playerName} <br />
            Puntos : {punctuation}!
          </div>
        </div>
        <div className="overRestart">
          <button
            className="restart"
            onClick={() => (window.location.href = "/")}
          >
            Restart
          </button>
        </div>
      </div>
    );

  // Screen of Round Two

  if (roundTwo)
    return (
      <div className="containerRound">
        <div className="ronda_name">
          <div className="name">2. RONDA DOS</div>
          <div className="icons">
            <FontAwesomeIcon
              className="icon"
              onClick={setDataPlaye}
              title="Salir"
              icon={faRightFromBracket}
            />
          </div>
        </div>

        <div className="question">
          {QuestionsTwo[questionPresentRoundTwo].question}
        </div>

        <div className="options">
          {QuestionsTwo[questionPresentRoundTwo].options.map((resp) => (
            <div
              className="ques"
              key={resp.textAnswer}
              onClick={(e) => answerSubmitTwo(resp.isCorrect, e)}
            >
              <div className="item">{resp.textAnswer}</div>
            </div>
          ))}
        </div>
      </div>
    );

  // Screen of Round Three

  if (roundThree)
    return (
      <div className="containerRound">
        <div className="ronda_name">
          <div className="name">3. RONDA TRES</div>
          <div className="icons">
            <FontAwesomeIcon
              className="icon"
              onClick={setDataPlaye}
              title="Salir"
              icon={faRightFromBracket}
            />
          </div>
        </div>

        <div className="question">
          {QuestionsThree[questionPresentRoundThree].question}
        </div>

        <div className="options">
          {QuestionsThree[questionPresentRoundThree].options.map((resp) => (
            <div
              className="ques"
              key={resp.textAnswer}
              onClick={(e) => answerSubmitThree(resp.isCorrect, e)}
            >
              <div className="item">{resp.textAnswer}</div>
            </div>
          ))}
        </div>
      </div>
    );

  // Screen of Round Four

  if (roundFour)
    return (
      <div className="containerRound">
        <div className="ronda_name">
          <div className="name">4. RONDA CUATRO</div>
          <div className="icons">
            <FontAwesomeIcon
              className="icon"
              onClick={setDataPlaye}
              title="Salir"
              icon={faRightFromBracket}
            />
          </div>
        </div>

        <div className="question">
          {QuestionsFour[questionPresentRoundFour].question}
        </div>

        <div className="options">
          {QuestionsFour[questionPresentRoundFour].options.map((resp) => (
            <div
              className="ques"
              key={resp.textAnswer}
              onClick={(e) => answerSubmitFour(resp.isCorrect, e)}
            >
              <div className="item">{resp.textAnswer}</div>
            </div>
          ))}
        </div>
      </div>
    );

  // Screen of Round Five

  if (roundFive)
    return (
      <div className="containerRound">
        <div className="ronda_name">
          <div className="name">5. RONDA CINCO</div>
          <div className="icons">
            <FontAwesomeIcon
              className="icon"
              onClick={setDataPlaye}
              title="Salir"
              icon={faRightFromBracket}
            />
          </div>
        </div>

        <div className="question">
          {QuestionsFive[questionPresentRoundFive].question}
        </div>

        <div className="options">
          {QuestionsFive[questionPresentRoundFive].options.map((resp) => (
            <div
              className="ques"
              key={resp.textAnswer}
              onClick={(e) => answerSubmitFive(resp.isCorrect, e)}
            >
              <div className="item">{resp.textAnswer}</div>
            </div>
          ))}
        </div>
      </div>
    );

  // Screen of Round One

  if (roundOne)
    return (
      <div className="containerRound">
        <div className="ronda_name">
          <div className="name">1. RONDA UNO</div>
          <div className="icons">
            <FontAwesomeIcon
              className="icon"
              onClick={setDataPlaye}
              title="Salir"
              icon={faRightFromBracket}
            />
          </div>
        </div>

        <div className="question">{Question[questionPresent].question}</div>

        <div className="options">
          {Question[questionPresent].options.map((resp) => (
            <div
              className="ques"
              key={resp.textAnswer}
              onClick={(e) => answerSubmit(resp.isCorrect, e)}
            >
              <div className="item">{resp.textAnswer}</div>
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <>
      <div className="containerRound">
        <div className="ronda_name">
          <div className="name">Glikr</div>
        </div>
        <div className="welcome">Bienvenido</div>

        <div className="options">
          <h4>
            Concurso de preguntas y respuestas!
          </h4>
          <div className="input">
            <input
              type="text"
              placeholder="Escribe tu nombre"
              value={name}
              onChange={player}
              autoComplete="off"
            />
          </div>

          <button className="save" onClick={save}>
            Guardar
          </button>
          <div className="author">
            <div className="by">By Joab Giraldo.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RondaOne;
