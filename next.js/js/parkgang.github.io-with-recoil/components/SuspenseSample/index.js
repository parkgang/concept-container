import { useRecoilValue } from "recoil";

import { getNameSelector } from "../../states";

function SuspenseSample() {
  const name = useRecoilValue(getNameSelector);

  return (
    <div>
      <h1>{JSON.stringify(name)}</h1>
    </div>
  );
}

export default SuspenseSample;
