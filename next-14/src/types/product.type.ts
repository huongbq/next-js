export interface IProducts {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  discountPercentage: number;
  category: string;
  reviews: IReview[];
}

export interface IReview {
  rating: 2;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductListProps {
  products: IProducts[];
  total: number;
  limit: number;
}
