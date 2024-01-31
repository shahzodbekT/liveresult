import React from "react";
import {
  IShowMatchesResponse,
  useShowMatchesQuery,
} from "../../store/Api/matchApi";

export const ScoreTable = () => {
  // const { data, error, isLoading } = useShowMatchesQuery('');
  // console.log(data);

  // console.log(error);

  // const matches = data; // Assuming that the API response is an array of matches

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        {/* {isLoading && <h1>Loading...</h1>} */}
        <thead>
          <tr>
            <th>Match ID</th>
            <th>Team 1</th>
            <th>Team 2</th>
            {/* Add more table headers based on your match data */}
          </tr>
        </thead>
        <tbody>
          {/* {matches.map((match: any) => (
              <tr key={match.id}>
                <td>{match.id}</td>
                <td>{match.homeTeam.tla}</td>
                <td>{match.awayTeam.tla}</td>
              </tr>
            ))} */}
        </tbody>
      </table>
    </div>
  );
};
