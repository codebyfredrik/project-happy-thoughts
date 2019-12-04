export const fetchData = async () => {
  const response = await fetch('https://technigo-thoughts.herokuapp.com/');
  const data = await response.json();

  return data;
};

export const postLike = async id => {
  const request = await fetch(
    `https://technigo-thoughts.herokuapp.com/${id}/like`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }
  );
  const data = await request.json();

  return data;
};
