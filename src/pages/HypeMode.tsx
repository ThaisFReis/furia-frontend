"use client";

import { useState, useEffect } from "react";
import { Flame, ThumbsUp, ThumbsDown, Heart, Trophy } from "lucide-react";
import { Progress } from "@/components/ui/Progress";

type Poll = {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    votes: number;
  }[];
  totalVotes: number;
  userVote?: string;
};

type Emote = {
  id: string;
  icon: React.ReactNode;
  count: number;
  active: boolean;
};

export const HypeMode = () => {
  const [currentPoll, setCurrentPoll] = useState<Poll>({
    id: "1",
    question: "Qual será o resultado do próximo round?",
    options: [
      { id: "1", text: "FURIA vence com facilidade", votes: 245 },
      { id: "2", text: "FURIA vence na tensão", votes: 189 },
      { id: "3", text: "Adversário vence", votes: 87 },
    ],
    totalVotes: 521,
  });

  const [emotes, setEmotes] = useState<Emote[]>([
    { id: "hype", icon: <Flame className="h-5 w-5" />, count: 324, active: false },
    { id: "gg", icon: <ThumbsUp className="h-5 w-5" />, count: 156, active: false },
    { id: "nt", icon: <ThumbsDown className="h-5 w-5" />, count: 78, active: false },
    { id: "love", icon: <Heart className="h-5 w-5" />, count: 213, active: false },
    { id: "win", icon: <Trophy className="h-5 w-5" />, count: 189, active: false },
  ]);

  const [messages, setMessages] = useState([
    { id: "1", text: "Vamos FURIA!", user: "F41" },
    { id: "2", text: "GG WP!", user: "F42" },
    { id: "3", text: "Que round incrível! 🔥", user: "F43" },
    { id: "4", text: "Essa jogada foi insana!", user: "F44" },
    { id: "5", text: "FURIA é o melhor time!", user: "F45" },
  ]);

  const [selectedEmote, setSelectedEmote] = useState<string | null>(null);

  // Simulate new messages
  useEffect(() => {
    const interval = setInterval(() => {
      const newMessages = [
        "Próximo round é nosso!",
        "Estamos dominando!",
        "arT é o melhor!",
        "Que jogada!",
        "Vamos ganhar esse Major!",
      ];

      const randomMessage = newMessages[Math.floor(Math.random() * newMessages.length)];
      const randomUser = `F${Math.floor(Math.random() * 90) + 10}`;

      setMessages(prev => {
        const updated = [...prev, { id: Date.now().toString(), text: randomMessage, user: randomUser }];
        return updated.slice(-15);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleVote = (optionId: string) => {
    if (currentPoll.userVote) return;

    setCurrentPoll(prev => {
      const updatedOptions = prev.options.map(option => {
        if (option.id === optionId) {
          return { ...option, votes: option.votes + 1 };
        }
        return option;
      });

      return {
        ...prev,
        options: updatedOptions,
        totalVotes: prev.totalVotes + 1,
        userVote: optionId,
      };
    });
  };

  const handleEmoteClick = (emoteId: string) => {
    setEmotes(prev => {
      // Se o emote já está selecionado, deseleciona
      if (selectedEmote === emoteId) {
        setSelectedEmote(null);
        return prev.map(emote => {
          if (emote.id === emoteId) {
            return { ...emote, active: false, count: emote.count - 1 };
          }
          return emote;
        });
      }

      // Caso contrário, seleciona o novo emote e deseleciona o anterior
      setSelectedEmote(emoteId);
      return prev.map(emote => {
        if (emote.id === emoteId) {
          return { ...emote, active: true, count: emote.count + 1 };
        } else if (emote.active) {
          return { ...emote, active: false, count: emote.count - 1 };
        }
        return emote;
      });
    });
  };

  return (
    <div className="w-full text-white flex flex-col p-8">
      {/* Título */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <Flame className="h-8 w-8 text-yellow-400" />
        <h1 className="text-3xl font-bold">HYPE MODE</h1>
      </div>

      {/* Conteúdo principal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Enquete ao vivo */}
        <div className="bg-[#161717] rounded-xl p-6">
          <h2 className="text-white font-bold mb-2">Enquete ao vivo</h2>
          <p className="text-gray-400 text-sm mb-6">Vote e veja o que a comunidade está pensando</p>
          
          <p className="text-white font-medium mb-4">{currentPoll.question}</p>

          <div className="space-y-4 mb-4">
            {currentPoll.options.map(option => (
              <div key={option.id}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{option.text}</span>
                  <span>{Math.round((option.votes / currentPoll.totalVotes) * 100)}%</span>
                </div>
                <Progress 
                  value={(option.votes / currentPoll.totalVotes) * 100}
                  indicatorClassName={
                    currentPoll.userVote === option.id 
                      ? "bg-yellow-500" 
                      : "bg-gray-500"
                  }
                  height="sm"
                />
              </div>
            ))}
          </div>

          {!currentPoll.userVote ? (
            <div className="flex flex-col gap-3">
              {currentPoll.options.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleVote(option.id)}
                  className="bg-[#0F0F0F] text-white py-2 px-4 rounded-md text-sm hover:bg-[#1c1c1c] transition"
                >
                  {option.text}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400 text-center">
              {currentPoll.totalVotes} votos totais • Seu voto foi registrado!
            </p>
          )}
        </div>

        {/* Emotes */}
        <div className="bg-[#161717] rounded-xl p-6">
          <h2 className="text-white font-bold mb-2">Emotes</h2>
          <p className="text-gray-400 text-sm mb-6">Mostre sua reação em tempo real</p>
          
          <div className="flex justify-between">
            {emotes.map(emote => (
              <button
                key={emote.id}
                onClick={() => handleEmoteClick(emote.id)}
                className={`flex flex-col items-center p-3 rounded-md transition ${
                  emote.active 
                    ? "bg-yellow-400/20 border border-yellow-400" 
                    : "bg-[#0F0F0F] hover:bg-[#1c1c1c]"
                }`}
              >
                <span className="text-xl">{emote.icon}</span>
                <span className="text-xs mt-1">{emote.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Chat ao vivo */}
        <div className="bg-[#161717] rounded-xl p-6">
          <h2 className="text-white font-bold mb-2">Chat ao vivo</h2>
          <p className="text-gray-400 text-sm mb-4">Mensagens da comunidade durante a partida</p>

          <div className="bg-[#0F0F0F] rounded-md p-4 text-sm h-64 overflow-y-auto flex flex-col gap-2">
            {messages.map(msg => (
              <div key={msg.id}>
                <span className="text-yellow-400">{msg.user}:</span>{" "}
                <span className="text-white">{msg.text}</span>
              </div>
            ))}
          </div>
          
          <p className="text-xs text-gray-500 mt-2">
            As mensagens são moderadas automaticamente
          </p>
        </div>
      </div>
    </div>
  );
};