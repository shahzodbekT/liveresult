import React from "react";
import { useShowMatchesQuery } from "../../store/Api/matchApi";
import { useNavigate } from "react-router-dom";

type MatchProps = {
  match_id: string;
  league_id: string;
  league_name: string;
  match_date: string;
  match_time: string;
  match_hometeam_id: string;
  match_hometeam_name: string;
  match_hometeam_score: string;
  match_awayteam_name: string;
  match_awayteam_id: string;
  match_awayteam_score: string;
  team_home_badge: string;
  team_away_badge: string;
};

export const ScoreTable: React.FC = () => {
  const { data, isLoading } = useShowMatchesQuery("");
  const navigate = useNavigate();

  const handleRowClick = (matchId: string) => {
    navigate(`/match-page/${matchId}`);
  };

  return (
    <div className="overflow-x-auto text-white">
      <table className="table bg-opacity-60">
        <thead className="text-white text-base">
          <tr>
            <th></th>
            <th>Home Team</th>
            <th>Score</th>
            <th>Score</th>
            <th>Away Team</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((match: MatchProps) => (
              <tr
                key={match.match_id}
                onClick={() => handleRowClick(match.match_id)}
                style={{ cursor: 'pointer' }}
              >
                <td>
                  <img className="size-5" src={match.team_home_badge} alt={match.match_hometeam_name} />
                </td>
                <td>{match.match_hometeam_name}</td>
                <td>{match.match_hometeam_score}</td>
                <td>{match.match_awayteam_score}</td>
                <td>{match.match_awayteam_name}</td>
                <td>
                  <img className="size-5" src={match.team_away_badge} alt={match.match_awayteam_name} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {isLoading && <h1>Loading...</h1>}
    </div>
  );
};
