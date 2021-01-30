import React, { useState, useEffect } from 'react';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';
import LoadingWidget from '../src/components/LoadingWidget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizImage from '../src/components/QuizImage';
import AB from '../src/components/AlternativeButton';

const QuestionWidget = ({
  question, total, questionIndex, action, rightAnswer,
}) => {
  let answer = null;
  const handleSelection = (item) => {
    answer = item;
  };

  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex} de ${total}`}
        </h3>
      </Widget.Header>
      <QuizImage src={question.image} alt="Descrição" />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>
        {
          question.alternatives.map((item) => <AB key={item} onClick={() => handleSelection(item)}>{item}</AB>)
        }
        <Button onClick={() => action(answer, rightAnswer)}>Confirmar</Button>
      </Widget.Content>
    </Widget>
  );
};

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [currentQuestion, setCurrrentQuestion] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const question = db.questions[currentQuestion];
  const rightAnswerIndex = db.questions[currentQuestion].answer;
  const answer = db.questions[currentQuestion].alternatives[rightAnswerIndex];
  const totalQuestion = db.questions.length;

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1500);
  }, []);

  const handleSubmitQuestion = (currentAnswer, rightAnswer) => {
    const nextQuestion = currentQuestion + 1;
    if (rightAnswer === currentAnswer) { setPontuacao(pontuacao + 1); }

    if (nextQuestion < totalQuestion) {
      setCurrrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ
            && (
            <QuestionWidget
              question={question}
              questionIndex={currentQuestion + 1}
              total={totalQuestion}
              action={handleSubmitQuestion}
              rightAnswer={answer}
            />
            )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && <div>{`Você acertou ${pontuacao} questões, parábens!`}</div>}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/rodrigoXiita" />
    </QuizBackground>
  );
}
