import React from "react";
import { useShowMatchesQuery } from "../../store/Api/matchApi";

export const ScoreTable = () => {
  const { data, error, isLoading } = useShowMatchesQuery("");
  console.log(data);
  console.log(error);

  return (
    <div className="overflow-x-auto">
      {isLoading && <h1>Loading...</h1>}
      {data?.response && data.response.length > 0 ? (
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Match ID</th>
              <th>Team 1</th>
              <th>Score Team 1</th>
              <th>Score Team 2</th>
              <th>Team 2</th>
            </tr>
          </thead>
          <tbody>
            {data.response.map((match: any) => (
              <tr key={match.match_id}>
                <td>{match.match_id}</td>
                <td>{match.match_hometeam_name}</td>
                <td>{match.match_hometeam_score}</td>
                <td>{match.match_awayteam_score}</td>
                <td>{match.match_awayteam_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};
