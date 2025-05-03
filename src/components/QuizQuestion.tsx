import { Progress } from "@/components/ui/Progress";

type Props = {
  question: {
    id: string;
    text: string;
    options: {
      id: string;
      text: string;
      value: any;
    }[];
  };
  index: number;
  total: number;
  onAnswer: (optionIndex: number) => void;
};

export const QuizQuestion = ({ question, index, total, onAnswer }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-sm text-gray-400 mb-2">
        Questão {index + 1} de {total}
      </p>
      <Progress
        value={((index + 1) / total) * 100}
        className="mb-4"
        indicatorClassName="bg-yellow-500"
        height="sm"
      />
      <div className="bg-[#161717] p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">{question.text}</h2>
        <div className="flex flex-col gap-3">
          {question.options.map((opt, i) => (
            <button
              key={opt.id}
              onClick={() => onAnswer(i)}
              className="text-left bg-[#0F0F0F] p-3 rounded hover:bg-[#1c1c1c] transition"
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};