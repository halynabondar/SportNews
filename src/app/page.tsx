import Hero from "@/components/Hero/Hero";
import LeagueList from "@/components/LeagueList/LeagueList";
import NewsList from "@/components/NewsList/NewsList";
import UpcomingMatches from "@/components/UpcomingMatches/UpcomingMatches";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <Hero />
          <LeagueList />
          <NewsList />
          <UpcomingMatches />
          Team Details
        </div>
      </main>
    </div>
  );
}
