import { siteHref } from '../navigation';
export type Photograph = { id:string; title:string; alt:string; category:string; src:string; large:string; width:number; height:number };
export const photoCollections = [
  {
    "name": "Nature",
    "description": "Landscapes, water, and the outdoors."
  },
  {
    "name": "Night",
    "description": "Light and atmosphere after dark."
  },
  {
    "name": "Candid",
    "description": "Passing views and everyday details."
  },
  {
    "name": "Travel",
    "description": "Places, architecture, and new perspectives."
  }
];
export const photographs:Photograph[] = [
  {
    "id": "mountain-lake",
    "title": "Across the lake",
    "alt": "A small boat on turquoise water beneath hazy mountain peaks.",
    "category": "Nature",
    "src": "photography/mountain-lake-800.webp",
    "large": "photography/mountain-lake-1600.webp",
    "width": 4032,
    "height": 3024
  },
  {
    "id": "river-valley",
    "title": "Along the river",
    "alt": "A broad pale river winding through a valley lined with evergreen trees.",
    "category": "Nature",
    "src": "photography/river-valley-800.webp",
    "large": "photography/river-valley-1600.webp",
    "width": 8430,
    "height": 3788
  },
  {
    "id": "night-lights",
    "title": "After dark",
    "alt": "Magenta lights illuminating a terrace beneath palm trees at night.",
    "category": "Night",
    "src": "photography/night-lights-800.webp",
    "large": "photography/night-lights-1600.webp",
    "width": 4032,
    "height": 3024
  },
  {
    "id": "street",
    "title": "A passing view",
    "alt": "A view from a vehicle along a street lined with colorful buildings.",
    "category": "Candid",
    "src": "photography/street-800.webp",
    "large": "photography/street-1600.webp",
    "width": 4032,
    "height": 3024
  },
  {
    "id": "footprints",
    "title": "Traces in the sand",
    "alt": "Footprints and marks left in pale beach sand.",
    "category": "Candid",
    "src": "photography/footprints-800.webp",
    "large": "photography/footprints-1600.webp",
    "width": 3024,
    "height": 4032
  },
  {
    "id": "pyramid",
    "title": "Stone and sky",
    "alt": "A stepped stone pyramid beneath a cloudy sky.",
    "category": "Travel",
    "src": "photography/pyramid-800.webp",
    "large": "photography/pyramid-1600.webp",
    "width": 4032,
    "height": 3024
  },
  {
    "id": "cenote",
    "title": "Looking down",
    "alt": "Long vines descending into the turquoise water of a cenote.",
    "category": "Travel",
    "src": "photography/cenote-800.webp",
    "large": "photography/cenote-1600.webp",
    "width": 4032,
    "height": 3024
  }
].map(photo=>({...photo,src:siteHref(photo.src),large:siteHref(photo.large)}));
