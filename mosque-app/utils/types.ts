import type { SanityDocument, Image, ImageAsset, ImageCrop, ImageHotspot } from "@sanity/types";

export interface Staffs extends SanityDocument {
    name: string;
    email: string;
    phone_number: string;
    profile?: Image & {
        asset: ImageAsset;
        hotspot?: ImageHotspot;
        crop?: ImageCrop;
    };
}
export interface event extends SanityDocument {
    name: string;
    date: Date;
    description?: string;
}

export interface BlockContent { //this is needed to create paragraphs, bc for the schematypes u had type is array and then of: block.
    _key: string;
    _type: "block";
    children: Array<{ //individual words (or parts) of the block, each child is a span (piece of text)
      _key: string;
      _type: "span";
      marks: string[]; //for words if they are bold, italic, links, etc.
      text: string; //actual text. 
      //if its confusing think of it as a table where each line has a text and a mark
      //ex: text    mark
      //   yes       []
      //   no        [strong]    this will be bolded. 
    }>;
    markDefs: any[];//holds things like link URLs or custom styles
    style: string; //how this block should be styled ("normal", "h2", etc.)
  }
  