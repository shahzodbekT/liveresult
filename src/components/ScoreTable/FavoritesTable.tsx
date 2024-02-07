import React from "react";
import { MatchProps } from "./ScoreTable";

type FavoritesTableProps = {
  favoriteMatches: string[];
};

export const FavoritesTable: React.FC<FavoritesTableProps> = ({
  favoriteMatches,
}) => {
  return (
    <div className="overflow-x-auto text-white m-10">
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
          {favoriteMatches.map(matchId => {
            // Retrieve match data from localStorage
            const matchData = JSON.parse(localStorage.getItem(`favoriteMatch_${matchId}`) || "null") as MatchProps;
            return (
              <tr key={matchId}>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
