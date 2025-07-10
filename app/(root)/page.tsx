import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const { query } = await searchParams;

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br /> Connect with Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container py-20">
        <p className="text-30-semibold mb-10">
          {query ? `Search results for "${query}"` : "Explore Startups"}
        </p>

        <ul className="card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">
              {query ? `No results found for "${query}"` : "No startups found."}
            </p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
