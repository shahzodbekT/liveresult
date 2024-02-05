import {
  createApi,
  fetchBaseQuery,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";

const TOKEN =
  "bba861045791d641454195f55c7ba231b5cd6dac62597c2070b0399df5385754";

export interface IShowMatchesResponse {
  map(arg0: (match: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  response: [
    {
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
    }
  ];
}

export const matchApi = createApi({
  reducerPath: "matchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apiv3.apifootball.com",
  }),
  endpoints: (builder) => ({
    showMatches: builder.query<IShowMatchesResponse, string>({
      query: (arg: string) =>
        ({
          url: `/?action=get_events&match_live=1&APIkey=${TOKEN}`,
          method: "GET",
        } as FetchArgs),
    }),
  }),
});

// Export the showMatches query
export const { useShowMatchesQuery } = matchApi;
