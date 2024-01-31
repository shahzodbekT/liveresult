import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TOKEN = "5e65a34f5f25488b90979154b3d9d9f1";

export interface IShowMatchesResponse {
  matches: [
    {
      id: number;
      status: string;
      minute: string;
      homeTeam: {
        id: number;
        name: string;
        tla: string;
      };
      awayTeam: {
        id: number;
        name: string;
        tla: string;
      };
      score: {
        winner: string;
        duration: string;
        fullTime: {
          home: number;
          away: number;
        };
      };
    }
  ];
}

export const matchApi = createApi({
  reducerPath: "matchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.football-data.org/v4",
    prepareHeaders: (headers) => {
      headers.set("X-Auth-Token", TOKEN);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    showMatches: builder.query<IShowMatchesResponse, string>({
      query: () => ({
        url: "/matches",
        // method: "GET",
      }),
      // headers: {
      //   'X-Auth-Token': apiKey,
      // },
    }),
  }),
});

// Export the showMatches query
export const { useShowMatchesQuery } = matchApi;
