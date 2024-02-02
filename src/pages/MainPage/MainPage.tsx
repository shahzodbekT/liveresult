import React from 'react';
import { Navbar } from "../../components/Navbar/Navbar";
import { ScoreTable } from "../../components/ScoreTable/ScoreTable";
import { useShowMatchesQuery } from "../../store/Api/matchApi";

export const MainPage = () => {
  return (
    <div>
      <Navbar linkText="Profile" path="/profile-page" navText="To Profile"/>
      <ScoreTable />
    </div>
  );
};