const apiUrl = process.env.REACT_APP_API_URL;

export const getAllOps = async () => {
  const result = await fetch(`${apiUrl}/ops`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await result.json();
};
