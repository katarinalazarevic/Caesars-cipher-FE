import axios, { Axios, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { toastMessages } from "src/constants/route-constants";
import { useToastStore } from "src/store/toast/useToastStore";
import { useAuthStore } from "src/store/user/useAuthStore";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

axios.defaults.baseURL = VITE_API_BASE_URL;

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _toastAdded?: boolean;
}

const setRequestAuthorizationHeader = (requestConfig: any, token: any) => {
  requestConfig.headers["Authorization"] = `Bearer ${token}`;
};

export const toastSuccess = (title: string) => {
  useToastStore.getState().addToast({
    title,
    date: new Date().toLocaleTimeString(),
    icon: '/successToast.svg',
    backgroundColor: '--toast-background-green',
  });
};

export const toastError = (title: string) => {
  useToastStore.getState().addToast({
    title,
    date: new Date().toLocaleTimeString(),
    icon: '/errorToast.svg',
    backgroundColor: '--toast-background-red',
  });
};

axios.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().getToken();

    if (token) {

      config.headers = config.headers || {};

      setRequestAuthorizationHeader(config, token)

    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Route key is used to find the route that was sent (eg /Users) and to
//based on that, it is determined which message for the post or path will be displayed
//from toastMessage
axios.interceptors.response.use(
  (response) => {

    const config = response.config as CustomAxiosRequestConfig;

    if ((response.status === 200 || response.status === 204) && config.method) {
      const routeKey = Object.keys(toastMessages).find((route) => config.url?.includes(route));

      //if there is routeKey and toastMessage[][] then AxiosRequestConfig is extended
      //with one auxiliary flag that is set only on the first incoming request
      //set to true to not show duplicate Toasts
      if (routeKey && toastMessages[routeKey][config.method]) {
        if (!config._toastAdded) {

          config._toastAdded = true;

          toastSuccess(toastMessages[routeKey][config.method])
        }
      }
    }
    else {
      toastError(toastMessages['ServerErrors']['wrong'])
    }

    return response;

  },
  async (error) => {

    if (error.response) {

      if (error.response.status === 500) {
        toastError(toastMessages['ServerErrors']['offline'])
        return Promise.reject(error);
      }

      const routeKey = Object.keys(toastMessages).find((route) => error.config.url?.includes(route));

      if (routeKey && toastMessages[routeKey]['error']) {

        toastError(toastMessages[routeKey]['error'])

      }
      } else if (error.request.status === 0) {

        toastError(toastMessages['ServerErrors']['wrong'])

        return Promise.reject(error);
      }

    const refreshToken = useAuthStore.getState().refreshToken;
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry && refreshToken) {
      if (useAuthStore.getState().refreshTokenInProgress) {
        return new Promise(function (resolve, reject) {
          useAuthStore.getState().addRequestToQueue({ resolve, reject });
        })
          .then((token) => {
            setRequestAuthorizationHeader(originalRequest, token);
            return axios.request(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      useAuthStore.getState().setRefreshTokenInProgress(true);

      return new Promise(async (resolve, reject) => {
        try {
          const response = await useAuthStore.getState().refreshTokenAsync(refreshToken);

          setRequestAuthorizationHeader(originalRequest, response.token);

          processQueue(null, response.token);
          resolve(axios(originalRequest));
        } catch (err) {
          processQueue(err, null);
          reject(err);
        } finally {
          useAuthStore.getState().setRefreshTokenInProgress(false);
        }
      });
    }

    return Promise.reject(error);
  }
);


const processQueue = (error: any, token: string | null = null) => {
  useAuthStore.getState().requestQueue.forEach((prom: any) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  useAuthStore.getState().clearRequestQueue();
};


const responseBody = <T>(response: AxiosResponse<T>) => response.data

const requests = {
  get: <T>(url: string, params?: object) =>
    axios.get<T>(url, { params }).then(responseBody),

  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),

  postAsQuery: <T>(url: string, params?: object) =>
    axios.get<T>(url, { params }).then(responseBody),

  put: <T>(url: string, body: {}) =>
    axios.put<T>(url, body).then(responseBody),

  delete: <T>(url: string, body?: object) =>
    axios.delete<T>(url, body).then(responseBody)
};

export default requests;
