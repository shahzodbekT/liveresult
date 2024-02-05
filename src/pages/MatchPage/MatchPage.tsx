import { useParams } from "react-router-dom";
import { useShowMatchesQuery } from "../../store/Api/matchApi";
import { Navbar } from "../../components/Navbar/Navbar";

export const MatchPage = () => {
  const { matchId } = useParams<{ matchId: string }>();
  const { data, isLoading } = useShowMatchesQuery(matchId as string);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const match = data?.response?.[0];

  return (
    <>
      <Navbar
        className="bg-opacity-60 hero-overlay"
        linkText="Main"
        navText="<= Back"
        path="/main-page"
      />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ydk9vatpnihwfquy6zq3)",
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1>
              {match?.match_hometeam_name} vs {match?.match_awayteam_name}
            </h1>
            <p>Date: {match?.match_date}</p>
            <p>Time: {match?.match_time}</p>
            <p>
              Score: {match?.match_hometeam_score} - {" "}
              {match?.match_awayteam_score}
            </p>
            <img src={match?.team_home_badge} alt="home-team" />
            <img src={match?.team_away_badge} alt="away-team" />
          </div>
        </div>
        N
      </div>
    </>
  );
};
