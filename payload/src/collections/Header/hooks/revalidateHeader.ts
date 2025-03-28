import type { CollectionAfterChangeHook } from "payload";

import { revalidateTag } from "next/cache";

export const revalidateHeader: CollectionAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating header`);

    revalidateTag("global_header");
  }

  return doc;
};
