import type { GetStaticPropsContext, GetStaticPropsResult } from "next";
import Link from "next/link";

import {
  StarIcon,
  WatchIcon,
  BugIcon,
  GithubIcon,
  projectIcons,
} from "../../components/Icons";
import { ProjectData, projects } from "../../utils/projectsData";

type Props = {
  project: ProjectData;
};

type Params = {
  path: string;
};

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: {
      path: project.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<Props>> {
  const project = projects.find((proj) => proj.slug === params?.path);

  if (project === undefined) {
    throw new Error("project이 존재하지 않습니다.");
  }

  return {
    props: {
      project,
    },
  };
}

export default function Project({ project }: Props) {
  const Icon = projectIcons[project.id];

  return (
    <div className="project">
      <aside>
        <h3>You can deploy...</h3>
        <ul>
          {projects.map((project) => {
            return (
              <li key={project.id}>
                <Link href={`/project/${project.slug}`}>{project.name}</Link>
              </li>
            );
          })}
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </aside>
      <main>
        <div className="card-big">
          <Icon width={249} height={278} />
          <div className="stats">
            <div className="stats-details">
              <div>
                <StarIcon width={18} height={18} />
                <p>{project.stargazers_count}</p>
              </div>
              <p>stars</p>
            </div>
            <div className="stats-details">
              <div>
                <WatchIcon width={18} height={18} />
                <p>{project.subscribers_count}</p>
              </div>
              <p>watchers</p>
            </div>
            <div className="stats-details">
              <div>
                <BugIcon width={18} height={18} />
                <p>{project.open_issues}</p>
              </div>
              <p>issues</p>
            </div>
          </div>
          <p className="description">{project.description}</p>
          <div className="cta">
            <a
              className="button-github"
              href={project.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon width={24} height={24} />
              Learn more...
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
