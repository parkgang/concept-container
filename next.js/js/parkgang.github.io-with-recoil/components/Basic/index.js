import { useRecoilValue } from "recoil";

import { getNameSelector } from "../../states";

function Basic() {
  const name = useRecoilValue(getNameSelector);

  return (
    <div>
      <h1>{JSON.stringify(name)}</h1>
    </div>
  );
}

export default Basic;
