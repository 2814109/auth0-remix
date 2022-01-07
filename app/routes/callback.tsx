import type { ActionFunction, LoaderFunction } from "remix";

import { authenticator } from "~/utils/auth.server";

export const loader: LoaderFunction = ({ request }) => {
  return authenticator.authenticate("auth0", request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
};
