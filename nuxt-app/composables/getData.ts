import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "./useSanity";

export interface Posts {
  _id: string;
  title: string;
  publishedAt: string;
  slug: {
    current: string;
  };
  body: any[];
  image: SanityImageSource;
}

export async function getPosts(): Promise<Posts[]> {
  return await client.fetch(
    '*[_type == "post"]{_id, title, publishedAt, slug, image, body}'
  );
}
