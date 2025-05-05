import { RadarChart } from "@/components/ui/RadarChart";

type Props = {
  scores: Record<string, number>;
  onRestart: () => void;
};

const descriptions = {
  estrategia:
    "Você valoriza a estratégia e o planejamento. Gosta de analisar as jogadas e entender as táticas por trás de cada movimento.",
  competitivo:
    "Você valoriza a agressividade e a dominação. Torce com intensidade e quer ver seu time sempre atacando.",
  fiel: "Você se adapta ao jogo, mantendo a lealdade ao time. Acompanha nos bons e maus momentos, sempre fiel.",
  analitico:
    "Você analisa cada movimento e busca eficiência. Observa estatísticas e detalhes técnicos do jogo.",
  apaixonado:
    "Você torce com o coração, com entrega total. Vive cada emoção do jogo intensamente.",
};

const traitColors = {
  estrategia: "text-blue-400",
  competitivo: "text-red-400",
  fiel: "text-green-400",
  analitico: "text-purple-400",
  apaixonado: "text-pink-400",
};

export const QuizResult = ({ scores, onRestart }: Props) => {
  // Normaliza os scores para porcentagens
  const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const normalizedScores = Object.fromEntries(
    Object.entries(scores).map(([trait, score]) => [
      trait,
      total > 0 ? Math.round((score / total) * 100) : 0,
    ])
  );

  const dominant = Object.entries(normalizedScores).sort(
    (a, b) => b[1] - a[1]
  )[0][0];

  // Prepara os dados para o RadarChart
  // No QuizResult.tsx, a preparação dos dados para o RadarChart já está correta:
  const radarData = [
    { trait: "Estratégia", value: normalizedScores.estrategia },
    { trait: "Competitivo", value: normalizedScores.competitivo },
    { trait: "Fiel", value: normalizedScores.fiel },
    { trait: "Analítico", value: normalizedScores.analitico },
    { trait: "Apaixonado", value: normalizedScores.apaixonado },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="border border-blue-400 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold mb-2 text-blue-400 capitalize">
          {dominant}
        </h2>
        <p className="text-gray-300 mb-4">Seu tipo dominante de fã</p>
        <div className="bg-[#0F0F0F] p-6 rounded-lg h-64 flex items-center justify-center">
          <RadarChart data={radarData} width={300} height={300} />
        </div>
        <div className="flex justify-between mt-6">
          <button className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition">
            Compartilhar Resultado
          </button>
          <button
            className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition"
            onClick={onRestart}
          >
            Refazer Quiz
          </button>
        </div>
      </div>

      {/* Cards de explicação */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(descriptions).map(([trait, desc]) => (
          <div
            key={trait}
            className="bg-[#161717] p-4 rounded-lg hover:bg-[#1e1f1f] transition"
          >
            <h3
              className={`font-bold mb-2 capitalize ${
                traitColors[trait as keyof typeof traitColors]
              }`}
            >
              {trait} (
              {normalizedScores[trait as keyof typeof normalizedScores]}%)
            </h3>
            <p className="text-sm text-gray-300">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
