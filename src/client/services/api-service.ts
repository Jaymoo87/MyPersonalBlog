export const TOKEN_KEY = "token";

type methods = "GET" | "POST" | "PUT" | "DELETE";

export function POST<T>(url: string, data: any) {
  return apiService<T>(url, "POST", data);
}

export function PUT<T>(url: string, data: any) {
  return apiService<T>(url, "PUT", data);
}
export function DELETE<T>(url: string, data: any) {
  return apiService<T>(url, "DELETE", data);
}
export function GET<T>(url: string, data?: any) {
  return apiService<T>(url, "GET", data);
}

export async function apiService<T = any>(url: string, method: methods = "GET", data?: any) {
  const TOKEN = localStorage.getItem(TOKEN_KEY);

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  const fetchOptions: IFetchOptions = {
    method,
    headers,
    body: JSON.stringify(data),
  };
  if (TOKEN) {
    headers["Authorization"] = `Bearer ${TOKEN}`;
  }
  if (method === "GET") {
    delete headers["Content-Type"];
    delete fetchOptions.body;
  }
  try {
    const res = await fetch(url, fetchOptions);

    if (res.status === 400) {
      throw new Error("check fetch options for any errors");
    }

    if (res.status === 401) {
      throw new Error("no token, expired token, or server could not validate token");
    }

    if (res.status === 404) {
      throw new Error("the server endpoint path was not found");
    }

    if (res.status === 500) {
      throw new Error("server blew up, check the terminal logs");
    }
    if (res.ok) {
      return <T>await res.json();
    } else {
      throw new Error("bro this shit is just fucked up");
    }
  } catch (error) {
    console.error("[error in apiService]", error.message);
    throw error;
  }
}

interface IFetchOptions {
  method: string;
  headers?: HeadersInit;
  body?: string;
}
