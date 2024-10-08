import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjYwODcxZGUwMTdiYzQyYzllYjEyMmQ0ZDU2NTUxNSIsIm5iZiI6MTcxOTE2MDM2OS43MTgxNDEsInN1YiI6IjY0YjIxMmY2MjNkMjc4MDBhZGM4NTM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jq8d5mM9fUuV58b--Lj557THYb4dDNSdWba77nIwqpo`,
    // Authorization: `Bearer ${API_KEY}`,
  },
});

// 요청 인터셉터 추가하기
api.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    console.log("request error", error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
api.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    console.log("response error", error);
    return Promise.reject(error);
  }
);

export default api;
