import { BaseQueryFn, EndpointBuilder, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface IShowMatchesResponce {
    matches: [
        {
            id: number,
            status: string,
            minute: string,
            homeTeam: {
                id: number,
                name: string,
                tla: string
            },
            awayTeam: {
                id: number,
                name: string,
                tla: string
            },
            score: {
                winner: string,
                duration: string,
                fullTime: {
                    home: number,
                    away: number
                },
            }
        }
    ]
}

export const matchApi = createApi({
    reducerPath: "matchApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://api.football-data.org/v4" }),
    endpoints: (builder: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, "matchApi">) => ({
        showMatches: builder.query<IShowMatchesResponce, string>(
            {
                query: () => ({
                    url: "/matches"
                })
            }
        )
    })
});
