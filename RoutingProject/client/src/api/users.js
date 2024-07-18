import { baseApi } from "./base";

export function getUsers(options) {
  return baseApi.get("users", options).then((res) => {
    return res.data;
  });
}


export function getUser(userId,options){
  return baseApi.get(`users/${userId}`,options).then((res)=>{return res.data})
}