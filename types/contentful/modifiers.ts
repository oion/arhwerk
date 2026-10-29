import type { Asset } from "contentful";

// Matches the client in plugins/contentful.ts: single locale, and links that
// can't be resolved (unpublished or deleted entries) are dropped
export type Modifiers = "WITHOUT_UNRESOLVABLE_LINKS";

export type ContentfulAsset = Asset<Modifiers, string>;
