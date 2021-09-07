import IconCard from "../components/IconCard";
import PostCard from "../components/PostCard";
import RandomCard from "../components/RandomCard";
import { projectIcons } from "../components/Icons";
import { projects } from "../utils/projectsData";

export default function Home() {
  return (
    <>
      <div className="home">
        <h1>SSG Dynamic Routing</h1>
        <div className="card-grid">
          {projects.map((project) => {
            const Icon = projectIcons[project.id];
            return (
              <IconCard
                key={project.id}
                Icon={Icon}
                title={project.name}
                slug={project.slug}
              />
            );
          })}
        </div>
        <h1>SSG Routing</h1>
        <div className="card-grid">
          <RandomCard />
        </div>
        <h1>CSR Dynamic Routing</h1>
        <div className="card-grid">
          {["1", "2", "3"].map((x, index) => (
            <PostCard key={index} path={x} />
          ))}
        </div>
      </div>
    </>
  );
}
