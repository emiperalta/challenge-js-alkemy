const apiUrl = process.env.REACT_APP_API_URL;

const getAllOps = async () => {
  const result = await fetch(`${apiUrl}/ops`);
  return await result.json();
};

const addOp = async ({ concept, amount, date, typeId }, token) => {
  const result = await fetch(`${apiUrl}/ops`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ concept, amount, date, typeId }),
  });
  return await result.json();
};

const updateOp = async (id, { concept, amount, date, typeId }, token) => {
  const result = await fetch(`${apiUrl}/ops/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ concept, amount, date, typeId }),
  });
  return await result.json();
};

const deleteOp = async (id, token) => {
  return await fetch(`${apiUrl}/ops/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application-json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export { addOp, deleteOp, getAllOps, updateOp };
