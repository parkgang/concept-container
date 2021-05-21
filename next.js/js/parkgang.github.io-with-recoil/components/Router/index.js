import Link from "next/link";

function Router() {
  return (
    <>
      <div>
        <Link href="/">
          <button>IndexPage 이동</button>
        </Link>
      </div>
      <div>
        <Link href="/loadable">
          <button>LoadablePage 이동</button>
        </Link>
      </div>
      <div>
        <Link href="/suspense">
          <button>SuspensePage 이동</button>
        </Link>
      </div>
    </>
  );
}

export default Router;
