import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "9ts1poxt",
  dataset: "production",
  apiVersion: "2023-08-31",
  useCdn: false,
});
