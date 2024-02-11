export type Data = {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  address_2: string | null;
  address_3: string | null;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  state: string;
  street: string;
};

export type Form = {
  username: string;
  email: string;
  phone?: string;
  feedback: string;
};

export type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};