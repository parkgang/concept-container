import { ChangeEvent, useState } from "react";
import { trpc, vanillaTrpc } from "src/lib/trpc";

const idCheckMsgFormat = (v: boolean) => (v ? "중복 ✅" : "중복 ❌");

export default function Home() {
  /**
   * id 값을 받기 위한 코드들
   */
  const [id, setId] = useState<number | undefined>(undefined);
  const handleIdOnchnage = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setId(parseInt(v));
  };

  /**
   * react-query 호출을 위한 코드들
   */
  const [queryId, setQueryId] = useState<number>();
  const idDuplicateCheckReactQuery =
    trpc.idDuplicateCheck.reactQueryCall.useQuery(
      {
        id: queryId as number,
      },
      {
        enabled: !!queryId,
      }
    );
  const handleReactQuery = () => {
    setQueryId(id);
  };

  /**
   * vanilla 호출을 위한 코드들
   */
  const [vanillaIsLoading, setVanillaIsLoading] = useState<boolean>(false);
  const [vanillaData, setVanillaData] = useState<boolean | undefined>(
    undefined
  );
  const handleVanilla = async () => {
    if (!id) {
      return;
    }

    setVanillaIsLoading(true);
    const res = await vanillaTrpc.idDuplicateCheck.vanillaCall.query({
      id: id,
    });
    setVanillaData(res);
    setVanillaIsLoading(false);
  };

  return (
    <>
      <input type="number" placeholder="id" onChange={handleIdOnchnage} />
      <button onClick={handleReactQuery}>react-query call</button>
      <button onClick={handleVanilla}>vanilla call</button>
      <hr />
      <h3>react-query 결과</h3>
      {(() => {
        switch (idDuplicateCheckReactQuery.status) {
          case "loading":
            if (idDuplicateCheckReactQuery.isInitialLoading === false) {
              return <>호줄 전</>;
            }

            return <>로딩 중...</>;
          case "success":
            return idCheckMsgFormat(idDuplicateCheckReactQuery.data);
        }
      })()}
      <hr />
      <h3>vanilla 결과</h3>
      {(() => {
        if (vanillaIsLoading) {
          return <>로딩 중...</>;
        }

        if (vanillaData === undefined) {
          return <>호줄 전</>;
        }

        return idCheckMsgFormat(vanillaData);
      })()}
    </>
  );
}
