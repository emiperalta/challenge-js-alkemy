const apiUrl = process.env.REACT_APP_API_URL;

export const getAllOps = async () => {
  const result = await fetch(`${apiUrl}/ops`);
  return await result.json();
};
