export interface Post {
  _id: string
  _title: string | null
  body: { _type: string; children?: any[] }[],
  image: SanityImage
}

export type SanityImage = {
    asset: {
      _ref: string
    }
}

export interface MenuBar {
    
}