import React from "react";
import { useParams } from "react-router-dom";
import { useShowMatchDetailsQuery } from "../../store/Api/matchApi";
import { Navbar } from "../../components/Navbar/Navbar";

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

export const MatchPage: React.FC = () => {
  const { matchId } = useParams<{ matchId: string }>();
  const { data, isLoading } = useShowMatchDetailsQuery(matchId || "");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const match: MatchProps | undefined = data?.response?.find(match => match.match_id === matchId);

  if (!match) {
    return <h1>Match not found</h1>;
  }

  return (
    <>
      <Navbar linkText="Main" navText="<= Back" path="/main-page" />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ydk9vatpnihwfquy6zq3)",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1>
              {match.match_hometeam_name} vs {match.match_awayteam_name}
            </h1>
            <p>Date: {match.match_date}</p>
            <p>Time: {match.match_time}</p>
            <p>
              Score: {match.match_hometeam_score} - {match.match_awayteam_score}
            </p>
            <img src={match.team_home_badge} alt="home-team" />
            <img src={match.team_away_badge} alt="away-team" />
          </div>
        </div>
      </div>
    </>
  );
};
