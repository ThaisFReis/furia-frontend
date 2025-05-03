import { useState } from "react";
import { QuizQuestion } from "@/components/QuizQuestion";
import { QuizResult } from "@/components/QuizResult";
import { questions } from "@/data/Question";

const initialScores = {
  estrategia: 0,
  competitivo: 0,
  fiel: 0,
  analitico: 0,
  apaixonado: 0,
};

export const FanDNAQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState(initialScores);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const selectedOption = questions[currentQuestion].options[optionIndex];
    const newScores = { ...scores };

    // Atualiza os scores com os valores da opção selecionada
    (
      Object.keys(selectedOption.value) as Array<
        keyof typeof selectedOption.value
      >
    ).forEach((trait) => {
      newScores[trait] += selectedOption.value[trait];
    });

    setScores(newScores);

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScores(initialScores);
    setIsFinished(false);
  };

  return (
    <div className="min-h-screen text-white p-8">
      {isFinished ? (
        <QuizResult scores={scores} onRestart={restartQuiz} />
      ) : (
        <QuizQuestion
          question={questions[currentQuestion]}
          index={currentQuestion}
          total={questions.length}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};
