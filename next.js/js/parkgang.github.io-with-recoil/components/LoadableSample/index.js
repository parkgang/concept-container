import { useRecoilValueLoadable } from "recoil";

import { getNameSelector } from "../../states";

function LoadableSample() {
  const name = useRecoilValueLoadable(getNameSelector);

  switch (name.state) {
    case "hasValue":
      return (
        <div>
          <h1>{JSON.stringify(name.contents)}</h1>
        </div>
      );
    case "loading":
      return <h1>Loadable Loading...</h1>;
    case "hasError":
      return <h1>{name.contents}</h1>;
  }
}

export default LoadableSample;
