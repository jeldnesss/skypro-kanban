import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function signUp({ login, name, password }) {
  try {
    const response = await axios.post(
      API_URL,
      JSON.stringify({
        login: login,
        name: name,
        password: password,
      }),
      {
        headers: {
          "Content-Type": "",
        },
      },
    );
    return response.data.user;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function signIn({ login, password }) {
  try {
    const response = await axios.post(
      API_URL + "/login",
      JSON.stringify({
        login: login,
        password: password,
      }),
      {
        headers: {
          "Content-Type": "",
        },
      },
    );
    return response.data.user;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}
