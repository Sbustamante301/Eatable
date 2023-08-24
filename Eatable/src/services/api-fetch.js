import { BASE_URI, tokenKey } from "../../config";

export const fetchData = async () => {
  const response = await fetch(`${BASE_URI}/products`, {
    headers: {
      Authorization: `Bearer ${tokenKey}`,
    },
  });
  const data = await response.json();
  return data;
};
