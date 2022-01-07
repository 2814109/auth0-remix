import type { ActionFunction, LoaderFunction } from "remix";
import { redirect } from "remix";

import { authenticator } from "~/utils/auth.server";

export const loader: LoaderFunction = () => redirect("/login");

export const action: ActionFunction = ({ request }) => {
  return authenticator.authenticate("auth0", request);
};
