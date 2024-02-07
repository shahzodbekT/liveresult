import React, { useState, useEffect } from "react";
import { useShowMatchesQuery } from "../../store/Api/matchApi";
import { useNavigate } from "react-router-dom";
import { FavoritesTable } from "./FavoritesTable";

export type MatchProps = {
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
  const [favoriteMatches, setFavoriteMatches] = useState<string[]>([]);

  useEffect(() => {
    // Retrieve favorites from localStorage when component mounts
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavoriteMatches(JSON.parse(savedFavorites));
    }
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleRowClick = (match: MatchProps) => {
    // Check if the match is already a favorite
    if (!favoriteMatches.includes(match.match_id)) {
      // Add the match to favorites if it's not already a favorite
      setFavoriteMatches(prevState => [...prevState, match.match_id]);
      // Save updated favorites to localStorage
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favoriteMatches, match.match_id])
      );
      // Save the match information in localStorage
      localStorage.setItem(`favoriteMatch_${match.match_id}`, JSON.stringify(match));
    } else {
      // Navigate to the match page if it's already a favorite
      navigate(`/match-page/${match.match_id}`, { state: { match } });
    }
  };

  return (
    <div className="overflow-x-auto text-white">
      <h1 className="text-center text-3xl m-5">Favorites:</h1>
      <FavoritesTable favoriteMatches={favoriteMatches} />
      <h1 className="text-center text-3xl m-5">Live:</h1>
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
                onClick={() => handleRowClick(match)}
                style={{ cursor: "pointer" }}
              >
                <td>
                  <img
                    className="size-5"
                    src={match.team_home_badge}
                    alt={match.match_hometeam_name}
                  />
                </td>
                <td>{match.match_hometeam_name}</td>
                <td>{match.match_hometeam_score}</td>
                <td>{match.match_awayteam_score}</td>
                <td>{match.match_awayteam_name}</td>
                <td>
                  <img
                    className="size-5"
                    src={match.team_away_badge}
                    alt={match.match_awayteam_name}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {isLoading && <h1>Loading...</h1>}
    </div>
  );
};
