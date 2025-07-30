export interface Post {
  _id: string
  _title: string | null
  body: SanityProse,
  image: SanityImage
}

export type SanityImage = {
    asset: {
      _ref: string
    }
}


export type PortableTextSpan = {
  _key: string
  _type: 'span'
  marks: string[]
  text: string
}

export type PortableTextBlock = {
  _key: string
  _type: 'block'
  children: PortableTextSpan[]
  markDefs: any[]
  style: string
}


export type SanityProse = PortableTextBlock[]

