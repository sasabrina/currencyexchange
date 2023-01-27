const BASE_URL: string = "https://api.vatcomply.com";

export const fetchCurrency = async (query: string) => {
  const request = await fetch(`${BASE_URL}/${query}`);
  const response = await request.json();

  return response;
};
