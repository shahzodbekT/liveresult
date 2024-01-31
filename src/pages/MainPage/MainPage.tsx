import { Navbar } from "../../components/Navbar/Navbar";
import { ScoreTable } from "../../components/ScoreTable/ScoreTable";
import { useShowMatchesQuery } from "../../store/Api/matchApi";

export const MainPage = () => {
  const { data, error, isLoading } = useShowMatchesQuery("");

  console.log(data);

  return (
    <div>
      <Navbar />
      <ScoreTable />
    </div>
  );
};
