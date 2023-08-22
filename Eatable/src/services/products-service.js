import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export async function getProduct() {
  const product = await apiFetch("/products");
  return product;
}
