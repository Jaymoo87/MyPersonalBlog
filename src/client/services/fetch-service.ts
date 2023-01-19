// not used! just another example of a api fetch service

import { TOKEN_KEY } from "./api-service";

type methods = "GET" | "POST" | "PUT" | "DELETE";

export function POST(url: string, data: any) {
  return fetcher(url, "POST", data);
}

export function PUT(url: string, data: any) {
  return fetcher(url, "PUT", data);
}
export function DELETE(url: string, data: any) {
  return fetcher(url, "DELETE", data);
}
export function GET(url: string, data: any) {
  return fetcher(url, "GET", data);
}

export async function fetcher(url: string, method: methods = "GET", data?: any) {
  return new Promise(async (resolve, reject) => {
    const token = localStorage.getItem(TOKEN_KEY);

    const options: { method: methods; headers: { [headerZ: string]: string }; body?: any | undefined } = {
      method,
      headers: {},
    };

    if (token) {
      options.headers.Authorization = `Bearer ${token}`;
    }

    if (method === "POST" || method === "PUT") {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(data);
    }
    if (method === "GET") {
      delete options.headers["Content-Type"];
      delete options.body;
    }
    try {
      const res = await fetch(url, options);
      const data = await res.json();

      if (res.ok) {
        resolve(data);
      } else {
        console.error(data);
        reject(data);
      }
    } catch (error) {
      console.log(error);
      reject(error);
    }

    return fetch(url, options);
  });
}
export default {
  GET,
  POST,
  PUT,
  DELETE,
};
