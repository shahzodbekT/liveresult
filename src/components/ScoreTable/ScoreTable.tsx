import React from "react";
import { useShowMatchesQuery } from "../../store/Api/matchApi";
import { useNavigate } from "react-router-dom";

type MatchProps = {
  match_id: "343880";
  league_id: "550";
  league_name: "National Soccer League";
  match_date: "2024-02-02";
  match_time: "14:00";
  match_hometeam_id: "8556";
  match_hometeam_name: "AS Kigali";
  match_hometeam_score: "0";
  match_awayteam_name: "Gorilla";
  match_awayteam_id: "11753";
  match_awayteam_score: "0";
  team_home_badge: "https://apiv3.apifootball.com/badges/8556_as-kigali.jpg";
  team_away_badge: "https://apiv3.apifootball.com/badges/11753_gorilla.jpg";
};

export const ScoreTable: React.FC = () => {
  const { data, isLoading } = useShowMatchesQuery("");

  const navigate = useNavigate();

  const handleRowClick = (matchId: string) => {
    navigate(`/match-page/${matchId}`);
  };

  return (
    <div
      className="overflow-x-auto text-white"
      style={{
        backgroundImage:
          "url(https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ydk9vatpnihwfquy6zq3)",
      }}
    >
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
                onClick={() => {
                  handleRowClick(match.match_id);
                }}
              >
                <td>
                  <img
                    className="size-5"
                    src={match.team_home_badge}
                    alt="home-team"
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
                    alt="away-team"
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
