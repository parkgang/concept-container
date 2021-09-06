import { SVGProps } from "react";
import Link from "next/link";

type Props = {
  Icon: ({ width, height }: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  slug: string;
};

export default function SmallCard({ Icon, title, slug }: Props) {
  return (
    <Link href={`/project/${slug}`} passHref>
      <a className="card-small">
        <Icon width={153} height={163} />
        <h3>{title}</h3>
      </a>
    </Link>
  );
}
