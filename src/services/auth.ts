import { fetch } from "./api";

/**
 * Login user
 * @api GET /api/auth/sign-in
 */
export async function loginUserI(params: {
  username: string;
  password: string;
}) {
  const login = await fetch("/api/auth", {
    params,
  });
  console.log(login.data?.abc);
}
