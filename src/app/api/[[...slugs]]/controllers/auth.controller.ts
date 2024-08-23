import { Elysia, t } from "elysia";

export const authController = new Elysia().group("/auth", (app) =>
  app.get(
    "",
    async ({ query, set, request }) => {
      return {
        abc: 123,
      };
    },
    {
      params: t.Object({
        username: t.String(),
        password: t.String(),
      }),
    }
  )
);
