import { email, z } from "zod";
export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};
export type CartItemsType = CartItemType[];

export const ShippingFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email().min(1, "Invalid email address"),
  phone: z
    .string()
    .min(7, "Phone number must be between 7 and 15 digits")
    .max(10, "Phone number must be between 7 and 10 digits"),
});
