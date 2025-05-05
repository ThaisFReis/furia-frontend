export const profileData = {
    name: "Ana Oliveira",
    level: 7,
    xp: 4300,
    xpToNextLevel: 5000,
    avatarUrl: "https://i.pravatar.cc/150?img=47",
    dominantTrait: "Criatividade",
    traits: {
      Criatividade: 90,
      Organização: 65,
      Comunicação: 70,
      Persistência: 75,
      Colaboração: 85,
    },
    badges: [
      { name: "Explorador", icon: "🌍" },
      { name: "Mestre da Criatividade", icon: "🎨" },
      { name: "Colaborador Top", icon: "🤝" },
    ],
  };
  
  export const traitColors: Record<string, string> = {
    Criatividade: "#f59e0b", // amarelo
    Organização: "#10b981",  // verde
    Comunicação: "#3b82f6",  // azul
    Persistência: "#ef4444", // vermelho
    Colaboração: "#8b5cf6",  // roxo
  };
  
  export const traitDescriptions: Record<string, string> = {
    Criatividade: "Você tem facilidade em criar, imaginar e propor soluções inovadoras.",
    Organização: "Você planeja bem, gosta de estrutura e é eficaz na execução.",
    Comunicação: "Você se expressa com clareza e sabe ouvir e adaptar sua linguagem.",
    Persistência: "Você mantém o foco e a determinação mesmo diante de dificuldades.",
    Colaboração: "Você trabalha bem em equipe e valoriza a troca com os outros.",
  };
  