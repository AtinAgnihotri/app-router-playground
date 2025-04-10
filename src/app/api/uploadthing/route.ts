import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

export const runtime = "nodejs"
// Export routes for Next App Router
const { GET, POST } = createRouteHandler({
  router: ourFileRouter,

  // Apply an (optional) custom config:
  // config: { ... },
});

export {
    GET,
    POST
}
