import Link from "next/link";

import SmallCard from "../components/SmallCard";
import { projectIcons } from "../components/Icons";
import { projects } from "../utils/projectsData";

export default function Home() {
  return (
    <>
      <div className="home">
        <h1>What Can I Deploy to Static Apps?</h1>
        <div className="card-grid">
          {projects.map((project) => {
            const Icon = projectIcons[project.id];
            return (
              <SmallCard
                key={project.id}
                Icon={Icon}
                title={project.name}
                slug={project.slug}
              />
            );
          })}
        </div>
        <div
          style={{
            fontSize: "3rem",
          }}
        >
          <ol>
            <li>
              <Link href="/post/1">1</Link>
            </li>
            <li>
              <Link href="/post/2">2</Link>
            </li>
            <li>
              <Link href="/post/3">3</Link>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
