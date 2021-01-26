import React from 'react';
import db from '../db.json';

export default function QuizPage() {
  return (
    <div>
      {db.questions.map((item) => <div><span>{item.title}</span></div>)}
    </div>
  );
}
