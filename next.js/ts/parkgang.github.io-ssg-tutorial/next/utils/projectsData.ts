export type ProjectData = {
  id: "react" | "vue" | "svelte" | "next" | "nuxt" | "gatsby";
  name: string;
  path: string;
  slug: string;
  stargazers_count: number;
  subscribers_count: number;
  open_issues: number;
  description: string;
  html_url: string;
};

export const projects: ProjectData[] = [
  {
    id: "react",
    name: "React",
    path: "facebook/react",
    slug: "facebook-react",
    stargazers_count: 0,
    subscribers_count: 0,
    open_issues: 0,
    description: "",
    html_url: "",
  },
  {
    id: "vue",
    name: "Vue",
    path: "vuejs/vue",
    slug: "vuejs-vue",
    stargazers_count: 0,
    subscribers_count: 0,
    open_issues: 0,
    description: "",
    html_url: "",
  },
  {
    id: "svelte",
    name: "Svelte",
    path: "sveltejs/svelte",
    slug: "sveltejs-svelte",
    stargazers_count: 0,
    subscribers_count: 0,
    open_issues: 0,
    description: "",
    html_url: "",
  },
  {
    id: "next",
    name: "Next.js",
    path: "zeit/next.js",
    slug: "zeit-nextjs",
    stargazers_count: 0,
    subscribers_count: 0,
    open_issues: 0,
    description: "",
    html_url: "",
  },
  {
    id: "nuxt",
    name: "Nuxt.js",
    path: "nuxt/nuxt.js",
    slug: "nuxt-nuxtjs",
    stargazers_count: 0,
    subscribers_count: 0,
    open_issues: 0,
    description: "",
    html_url: "",
  },
  {
    id: "gatsby",
    name: "Gatsby",
    path: "gatsbyjs/gatsby",
    slug: "gatsbyjs-gatsby",
    stargazers_count: 0,
    subscribers_count: 0,
    open_issues: 0,
    description: "",
    html_url: "",
  },
];
