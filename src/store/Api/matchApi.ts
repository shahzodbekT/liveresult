import {
  createApi,
  fetchBaseQuery,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";
import { Navbar } from "../../components/Navbar/Navbar";
import { ScoreTable } from "../../components/ScoreTable/ScoreTable";

const TOKEN =
  "bba861045791d641454195f55c7ba231b5cd6dac62597c2070b0399df5385754";

export interface IShowMatchesResponse {
  response: [
    {
      match_id: "343880";
      country_id: "146";
      country_name: "Rwanda";
      league_id: "550";
      league_name: "National Soccer League";
      match_date: "2024-02-02";
      match_status: "15";
      match_time: "14:00";
      match_hometeam_id: "8556";
      match_hometeam_name: "AS Kigali";
      match_hometeam_score: "0";
      match_awayteam_name: "Gorilla";
      match_awayteam_id: "11753";
      match_awayteam_score: "0";
      match_hometeam_halftime_score: "0";
      match_awayteam_halftime_score: "0";
      match_hometeam_extra_score: "";
      match_awayteam_extra_score: "";
      match_hometeam_penalty_score: "";
      match_awayteam_penalty_score: "";
      match_hometeam_ft_score: "";
      match_awayteam_ft_score: "";
      match_hometeam_system: "";
      match_awayteam_system: "";
      match_live: true;
      match_round: "";
      match_stadium: "";
      match_referee: "";
      team_home_badge: "https://apiv3.apifootball.com/badges/8556_as-kigali.jpg";
      team_away_badge: "https://apiv3.apifootball.com/badges/11753_gorilla.jpg";
      league_logo: "https://apiv3.apifootball.com/badges/logo_leagues/550_national-soccer-league.png";
      country_logo: "https://apiv3.apifootball.com/badges/logo_country/146_rwanda.png";
      league_year: "2023/2024";
      fk_stage_key: "";
      stage_name: "";
      goalscorer: [];
      cards: [];
      substitutions: {
        home: [];
        away: [];
      };
      lineup: {
        home: {
          starting_lineups: [];
          substitutes: [];
          coach: [
            {
              lineup_player: "J. Sheridan";
              lineup_number: "";
              lineup_position: "";
              player_key: "1153528316";
            }
          ];
          missing_players: [];
        };
        away: {
          starting_lineups: [];
          substitutes: [];
          coach: [
            {
              lineup_player: "G. Alexander";
              lineup_number: "";
              lineup_position: "";
              player_key: "124789768";
            }
          ];
          missing_players: [];
        };
      };
      statistics: [
        {
          type: "Throw In";
          home: "0";
          away: "0";
        },
        {
          type: "Free Kick";
          home: "0";
          away: "0";
        },
        {
          type: "Goal Kick";
          home: "0";
          away: "0";
        },
        {
          type: "Penalty";
          home: "0";
          away: "0";
        },
        {
          type: "Substitution";
          home: "0";
          away: "0";
        },
        {
          type: "Attacks";
          home: "3";
          away: "12";
        },
        {
          type: "Dangerous Attacks";
          home: "1";
          away: "4";
        },
        {
          type: "On Target";
          home: "0";
          away: "0";
        },
        {
          type: "Off Target";
          home: "0";
          away: "0";
        }
      ];
      statistics_1half: [];
    }
  ];
}

export const matchApi = createApi({
  reducerPath: "matchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apiv3.apifootball.com",
    // prepareHeaders: (headers) => {
    //   headers.set("X-Auth-Token", TOKEN);
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    showMatches: builder.query<IShowMatchesResponse, string>({
      query: (arg: string) =>
        ({
          url: `/?action=get_events&match_live=1&APIkey=${TOKEN}`,
          method: "GET",
          referrerPolicy: "no-referrer-when-downgrade",
        } as FetchArgs), // Add 'as FetchArgs' to explicitly specify the type
    }),
  }),
});

// Export the showMatches query
export const { useShowMatchesQuery } = matchApi;
