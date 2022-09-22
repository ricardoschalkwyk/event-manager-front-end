const BASE_URL = "http://localhost:8000/api";

const Api = {
  get(url = "") {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem("token");

      fetch(BASE_URL + url, {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        // Check is res is ok then resolve || reject
        return res.ok
          ? res.json().then((res) => resolve(res))
          : res.json().then((res) => reject(res));
      });
    });
  },

  // POST
  post(url = "", data) {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem("token");

      fetch(BASE_URL + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }).then((res) => {
        // Check is res is ok
        return res.ok
          ? // If it is then resolve
            res.json().then((res) => resolve(res))
          : //  If not then reject
            res.json().then((res) => reject(res));
      });
    });
  },

  // PUT
  put(url = "", data) {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem("token");

      fetch(BASE_URL + url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }).then((res) => {
        // Check is res is ok
        return res.ok
          ? // If it is then resolve
            res.json().then((res) => resolve(res))
          : //  If not then reject
            res.json().then((res) => reject(res));
      });
    });
  },

  // DELETE
  delete(url = "", data) {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem("token");

      fetch(BASE_URL + url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }).then((res) => {
        // Check is res is ok
        return res.ok
          ? // If it is then resolve
            res.json().then((res) => resolve(res))
          : //  If not then reject
            res.json().then((res) => reject(res));
      });
    });
  },
};

export default Api;
