export interface IProduct {
  id: number;
  category: "headphones" | "earphones" | "speakers";
  title: string;
  description: string;
  price: number;
  span?: string;
  spanDetail?: string;
  features: string[];
  box: IBoxItem[];
  categoryProduct: string;
  displayImage: string;
  featureImage: string;
  otherProducts: IOtherProduct[];
}

export interface IBoxItem {
  quantity: string;
  text: string;
}

export interface IOtherProduct {
  image: string;
  name: string;
}
