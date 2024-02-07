import React from "react";
import { useParams, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const match = location.state?.match as MatchProps;

  if (!match) {
    return <h1>Match not found</h1>;
  }

  return (
    <>
      <Navbar linkText="Main" navText="<= Back" path="/main-page" />
      <div className="hero min-h-screen">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-lg">
            <div className="flex flex-row gap-10 mb-4 ">
              <img
                src={match.team_home_badge}
                alt="home-team"
                className="size-24"
              />
              <img
                src={match.team_away_badge}
                alt="away-team"
                className="size-24"
              />
            </div>
            <h1>
              {match.match_hometeam_name} vs {match.match_awayteam_name}
            </h1>
            <p>Date: {match.match_date}</p>
            <p>Time: {match.match_time}</p>
            <p>
              Score: {match.match_hometeam_score} - {match.match_awayteam_score}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
