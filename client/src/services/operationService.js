const apiUrl = process.env.REACT_APP_API_URL;

export const getAllOps = async () => {
  const result = await fetch(`${apiUrl}/ops`);
  return await result.json();
};

export const addOp = async ({ concept, amount, date, typeId }) => {
  const result = await fetch(`${apiUrl}/ops`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ concept, amount, date, typeId }),
  });
  return await result.json();
};
