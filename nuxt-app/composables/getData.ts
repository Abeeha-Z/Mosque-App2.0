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
export interface Lessons {
  _id: string;
  title: string;
  level: string;
  publishedAt: string;
  slug: {
    current: string;
  };
  body: any[];
  image: SanityImageSource;
  status: string;
}
export interface Staff {
  _id: string;
  staff_name: string;
  slug: {
    _type: "slug";
    current: string;
  };
  image?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  subjects?: SubjectLevel[];
}

export type ClassLevel = "1a" | "1b" | "1c" | "2" | "3" | "4" | "5";

export type SubjectLevel =
  | {
      subject: "islamic_history";
      islamic_history_level: {
        Classes: ClassLevel[];
      };
    }
  | {
      subject: "islamic_studies";
      islamic_studies_level: {
        Classes: ClassLevel[];
      };
    }
  | {
      subject: "arabic";
      arabic_level: {
        Classes: ClassLevel[];
      };
    }
  | {
      subject: "surahs";
      surahs_level: {
        Classes: ClassLevel[];
      };
    }
  | {
      subject: "salah";
      salah_level: {
        Classes: ClassLevel[];
      };
    }
  | {
      subject: "tafseer";
      tafseer_level: {
        Classes: ClassLevel[];
      };
    }
  | {
      subject: "contemp_issues";
      contemp_issues_level: {
        Classes: ClassLevel[];
      };
    };

export async function getStaff(): Promise<Staff[]> {
  return await client.fetch(
    '*[_type == "staff"]{_id, staff_name, slug, image, subjects}'
  );
}

export async function getPosts(): Promise<Posts[]> {
  return await client.fetch(
    '*[_type == "post"]{_id, title, publishedAt, slug, image, body}'
  );
}

export async function getLessons(): Promise<Lessons[]> {
  return await client.fetch(
    '*[_type == "lesson"]{_id, title, level, publishedAt, slug, image, body, status}'
  );
}
