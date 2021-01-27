import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
import Button from '../src/components/Button';
import Input from '../src/components/Input';
import RepositorioItem from '../src/components/RepositoriosItem';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;
const Paragrafo = styled.p`
    font-size: 14px;
    font-weight: normal;
    margin: 0;  
`;

const Header = styled.h1`
  margin-bottom: 8px !important;
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  const changeName = (event) => {
    setName(event.target.value);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizLogo />
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>
              The legend of Zelda
            </h1>
          </Widget.Header>
          <Widget.Content>
            <Paragrafo>
              Teste os seus conhecimentos sobre Zelda e divirta-se criando o seu AluraQuiz!
            </Paragrafo>
            <form onSubmit={onSubmit}>
              <Input onChange={changeName} placeholder="Diz aí o seu nome pra jogar :)" />
              <Button disabled={name.length === 0}>JOGAR</Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <Header>
              Quizes da galera
            </Header>
            <Paragrafo>
              Dá uma olhada nesses quizes incríveis que o pessoal da imersão React fez:
            </Paragrafo>
            <RepositorioItem label="clebinho" />
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/rodrigoXiita" />
    </QuizBackground>
  );
}
