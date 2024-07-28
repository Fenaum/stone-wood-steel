import Head from "next/head";
import JoinTournamentButton from "../components/JoinTournamentButton/JoinTournamentButton";
import ViewTournamentsButton from "../components/ViewTournamentsButton/ViewTournamentsButton";
import CreateTournamentButton from "../components/CreateTournamentButton/CreateTournamentButton";
import StandingsButton from "../components/StandingsButton/StandingsButton";
import RulesButton from "../components/RulesButton/RulesButton";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Rock Paper Scissors Tournament</title>
        <meta
          name="description"
          content="Play and compete in RPS tournaments!"
        />
      </Head>

      <h1>Welcome to the Rock Paper Scissors Tournament!</h1>
      <p>Choose an option below:</p>

      <JoinTournamentButton />
      <ViewTournamentsButton />
      <CreateTournamentButton />
      <StandingsButton />
      <RulesButton />

      {/* Additional content or navigation can go here */}
    </div>
  );
}
