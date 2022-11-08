import { router, publicProcedure } from "src/server/trpc";
import { z } from "zod";
import { User } from "lib/session";
import { Octokit } from "octokit";
import type { Endpoints } from "@octokit/types";
import { TRPCError } from "@trpc/server";

const octokit = new Octokit();
export type Events =
  Endpoints["GET /users/{username}/events"]["response"]["data"];

export const sessionRouter = router({
  user: publicProcedure.query(async ({ ctx }) => {
    if (ctx.session.user) {
      return {
        ...ctx.session.user,
        isLoggedIn: true,
      };
    } else {
      return {
        isLoggedIn: false,
        login: "",
        avatarUrl: "",
      };
    }
  }),
  event: publicProcedure.query(async ({ ctx }) => {
    const user = ctx.session.user;

    if (!user || user.isLoggedIn === false) {
      // TODO: 아래와 같은 응답처리가 맞는지 확인 필요
      throw new TRPCError({
        code: "UNAUTHORIZED",
      });
      // res.status(401).end();
    }

    try {
      const { data: events } =
        await octokit.rest.activity.listPublicEventsForUser({
          username: user.login,
        });

      return events;
    } catch (error) {
      return [];
    }
  }),
  login: publicProcedure
    .input(
      z.object({
        username: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { username } = input;

      try {
        const {
          data: { login, avatar_url },
        } = await octokit.rest.users.getByUsername({ username });

        const user = { isLoggedIn: true, login, avatarUrl: avatar_url } as User;
        ctx.session.user = user;
        await ctx.session.save();
        return user;
      } catch (error) {
        // TODO: tRPC 에러 응답 처리 필요
        console.error(error);
        // res.status(500).json({ message: (error as Error).message });
      }
    }),
  logout: publicProcedure.mutation(async ({ ctx }) => {
    ctx.session.destroy();
    return { isLoggedIn: false, login: "", avatarUrl: "" };
  }),
});
