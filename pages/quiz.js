import React from 'react';
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
import AlternativeButton from '../src/components/AlternativeButton';

const QuestionWidget = ({ question, total, questionIndex }) => (
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
          // eslint-disable-next-line max-len
          question.alternatives.map((item) => <AlternativeButton key={item}>{item}</AlternativeButton>)
      }
      <Button>Confirmar</Button>
    </Widget.Content>
  </Widget>
);

export default function QuizPage() {
  const question = db.questions[0];
  const loading = true;

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {!loading && <QuestionWidget question={question} total={db.questions.length} />}
        {loading && <LoadingWidget />}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/rodrigoXiita" />
    </QuizBackground>
  );
}
