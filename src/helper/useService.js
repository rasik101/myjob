import { useReducer } from "react";
import { toast } from "react-toastify";
import API from "./axios";

export default function UseService(type) {
  const initialState = {
    data: "",
    loader: false,
    networkError: "",
    error: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INITIAL":
        return { ...state, loader: true, error: "", networkError: "" };
      case "SUCCESS":
        return {
          ...state,
          loader: false,
          data: action.payload,
          error: "",
          networkError: "",
        };
      case "FAIL":
        return { ...state, loader: false, data: "", error: action.payload };
      case "NETWORK_ERROR":
        return {
          ...state,
          loader: false,
          data: "",
          networkError: action.payload,
        };
      default:
        return { ...state };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const GetApiCall = (path) => {
    dispatch({ type: "INITIAL" });

    API.get(path)
      .then((res) => {
        dispatch({ type: "SUCCESS", payload: res.data.data });
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx

          dispatch({ type: "FAIL", payload: error.response });
        } else if (error.request) {
          // The request was made but no response was received
          toast.error("Network Error");
          dispatch({ type: "NETWORK_ERROR", payload: error.request });
        } else {
          toast.error("Something went wrong");
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  };
  const PostApiCall = (path, payload) => {
    dispatch({ type: "INITIAL" });
    API.post(path, payload)
      .then((res) => {
        dispatch({ type: "SUCCESS", payload: res.data.data });
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          toast.error(error.response.data.message);
          dispatch({ type: "FAIL", payload: error.response });
        } else if (error.request) {
          // The request was made but no response was received
          toast.error("Network Error");
          dispatch({ type: "NETWORK_ERROR", payload: error.request });
        } else {
          toast.error("Something went wrong");
          // Something happened in setting up the request that triggered an Error
          //  console.log('Error', error.message);
        }
      });
  };

  switch (type) {
    case "get":
      return [state, GetApiCall];
    case "post":
      return [state, PostApiCall];
    default:
      return [state, GetApiCall];
  }
}
