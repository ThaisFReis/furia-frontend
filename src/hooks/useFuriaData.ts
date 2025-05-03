import { useEffect, useState } from 'react';
import { api } from '@/service';

interface Player {
  id: number;
  name: string;
}

interface Team {
  id: number;
  name: string;
  players: Player[];
}

export const useFuriaData = () => {
  const [team, setTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get('/api/furia'); // Usando sua instância do axios
        const teamData = response.data;
        
        if (!teamData) {
          throw new Error('Time FURIA não encontrado');
        }

        const formattedTeam: Team = {
          id: teamData.id,
          name: teamData.name,
          players: teamData.players.map((p: any) => ({
            id: p.id ?? -1,
            name: p.name || 'Nome não disponível'
          }))
        };

        setTeam(formattedTeam);
        setError(null);
      } catch (err) {
        console.error('Erro na requisição:', err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        setTeam(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { team, loading, error };
};