import { publicProcedure, router } from "src/trpc/trpc";
import { z } from "zod";

const idDuplicateCheckProcedure = publicProcedure
  .input(
    z.object({
      id: z.number(),
    })
  )
  .query(({ input }) => {
    const { id } = input;

    // id가 10보다 크면 중복으로 간주
    return id > 10;
  });

export const appRouter = router({
  idDuplicateCheck: router({
    // 동일한 프로시저 이지만 namespace으로 구분해서 cache 여부를 손쉽게 확인하기 위함
    reactQueryCall: idDuplicateCheckProcedure,
    vanillaCall: idDuplicateCheckProcedure,
  }),
});

export type AppRouter = typeof appRouter;
