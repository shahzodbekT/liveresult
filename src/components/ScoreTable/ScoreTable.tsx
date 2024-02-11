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
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavoriteMatches(JSON.parse(savedFavorites));
    }
  }, []);

  const handleRowClick = (match: MatchProps) => {
    navigate(`/match-page/${match.match_id}`, { state: { match } });
  };

  const handleAddFavorite = (match: MatchProps) => {
    if (!favoriteMatches.includes(match.match_id)) {
      setFavoriteMatches((prevState) => [...prevState, match.match_id]);
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favoriteMatches, match.match_id])
      );
      localStorage.setItem(
        `favoriteMatch_${match.match_id}`,
        JSON.stringify(match)
      );
    }
  };

  const handleRemoveFavorite = (matchId: string) => {
    const updatedFavorites = favoriteMatches.filter((id) => id !== matchId);
    setFavoriteMatches(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="overflow-x-auto">
      <FavoritesTable
        favoriteMatches={favoriteMatches}
        onDeleteFavorite={handleRemoveFavorite}
      />
      <h1 className="text-center text-3xl m-5">Live:</h1>
      <table className="table table-zebra">
        <thead className="text-base">
          <tr>
            <th></th>
            <th>Home Team</th>
            <th>Score</th>
            <th>Score</th>
            <th>Away Team</th>
            <th></th>
            <th>Favorites</th>
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
                <td>
                  <button
                    className="btn btn-primary mr-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddFavorite(match);
                    }}
                  >
                    Add
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {isLoading && (
        <div className="flex mt-10 justify-center align-middle">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </div>
  );
};
