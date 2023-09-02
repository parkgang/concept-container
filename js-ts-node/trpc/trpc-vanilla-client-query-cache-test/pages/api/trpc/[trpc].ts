import * as trpcNext from "@trpc/server/adapters/next";
import { createContext } from "src/trpc/context";
import { appRouter } from "src/trpc/routers/_app";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});
