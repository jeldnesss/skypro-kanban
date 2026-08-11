import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function getTasks(token) {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "",
    },
  });
  return response.data.tasks;
}

export async function addTask(token, task) {
  const response = await axios.post(API_URL, task, {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "",
    },
  });
  return response.data.tasks;
}

export async function editTask(token, id, task) {
  const response = await axios.put(API_URL + "/" + id, task, {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "",
    },
  });
  return response.data.tasks;
}

export async function deleteTask(token, id) {
  const response = await axios.delete(API_URL + "/" + id, {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "",
    },
  });
  return response.data.tasks;
}
