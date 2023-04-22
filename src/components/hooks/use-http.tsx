import { useCallback, useState } from "react";

export enum methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

interface IRequest {
  method?: methods;
  body?: object;
  url: string;
}

const useHttp = (applyDataFunction: (data: any) => void) => {
  const [loading, setloading] = useState(false);

  const getProducts = useCallback(async (requestConfig: IRequest) => {
    const { url, method, body } = requestConfig;
    try {
      setloading(true);
      const response = await fetch(`${url}`, {
        method: method ? method : methods.GET,
        body: body ? JSON.stringify(body) : null,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Request fail");

      const data = await response.json();
      applyDataFunction(data);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  }, [applyDataFunction]);

  return { loading, getProducts };
};

export default useHttp;
