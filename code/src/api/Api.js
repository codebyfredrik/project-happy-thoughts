const baseURL = `https://express-happy-thoughts-api.herokuapp.com/api`;

export const fetchData = async () => {
  const response = await fetch(baseURL);
  const data = await response.json();

  return data;
};

export const postLike = async id => {
  const request = await fetch(`${baseURL}/${id}/like`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await request.json();

  return data;
};
