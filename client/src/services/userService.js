const apiUrl = process.env.REACT_APP_API_URL;

const signIn = async ({ email, password }) => {
  const result = await fetch(`${apiUrl}/users/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return await result.json();
};

const signUp = async ({ username, email, password }) => {
  const result = await fetch(`${apiUrl}/users/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });
  return await result.json();
};

export { signIn, signUp };
