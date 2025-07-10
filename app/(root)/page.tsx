import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const { query } = await searchParams;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: 'Aruniga'},
    _id: 1,
    description: "This is a sample startup description. It provides an overview of the startup's mission, vision, and key offerings. The description should be concise yet informative, highlighting the unique aspects of the startup.",
    image: "https://cdn.pixabay.com/photo/2017/09/27/10/31/robot-2791677_1280.jpg",
    category: "Robots",
    title: "We Robots",
  }];

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
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p className="no-results">
              {query ? `No results found for "${query}"` : "No startups found."}
            </p>
          )}
        </ul>
      </section>
    </>
  );
}
