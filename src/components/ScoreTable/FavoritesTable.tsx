import React from "react";
import { MatchProps } from "./ScoreTable";
import { useNavigate } from "react-router-dom";

type FavoritesTableProps = {
  favoriteMatches: string[];
  onDeleteFavorite: (matchId: string) => void;
};

export const FavoritesTable: React.FC<FavoritesTableProps> = ({
  favoriteMatches,
  onDeleteFavorite,
}) => {
  const navigate = useNavigate();

  const handleRowClick = (match: MatchProps) => {
    navigate(`/match-page/${match.match_id}`, { state: { match } });
  };

  if (favoriteMatches.length === 0) {
    return null; // Don't render anything if there are no favorite matches
  }

  return (
    <div className="overflow-x-auto m-10">
      <h1 className="text-center text-3xl m-5">Favorites:</h1>
      <table className="table table-zebra">
        <thead className="text-base">
          <tr>
            <th></th>
            <th>Home Team</th>
            <th>Score</th>
            <th>Score</th>
            <th>Away Team</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {favoriteMatches.map((matchId) => {
            const matchData = JSON.parse(
              localStorage.getItem(`favoriteMatch_${matchId}`) || "null"
            ) as MatchProps;
            return (
              <tr
                key={matchId}
                onClick={() => {
                  handleRowClick(matchData);
                }}
              >
                <td>
                  <img
                    className="size-5"
                    src={matchData.team_home_badge}
                    alt={matchData.match_hometeam_name}
                  />
                </td>
                <td>{matchData.match_hometeam_name}</td>
                <td>{matchData.match_hometeam_score}</td>
                <td>{matchData.match_awayteam_score}</td>
                <td>{matchData.match_awayteam_name}</td>
                <td>
                  <img
                    className="size-5"
                    src={matchData.team_away_badge}
                    alt={matchData.match_awayteam_name}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteFavorite(matchId);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
