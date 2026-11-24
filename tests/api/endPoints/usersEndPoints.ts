//===================Requests objects==================================
const baseUrl= "https://jsonplaceholder.typicode.com"
const usersEndpoint = "/posts"
const userParam = {
   "id":2}
const requestBody = {
 "title":"foo",
 "body": "bar",
 "userId":102

};
const requestHeaders = {
 "Content-Type": "application/json",
 

};



//===================Requests==================================
//-------------------get200------------------------------------
import { APIRequestContext } from '@playwright/test';

async function getUsers(request: APIRequestContext) {
  const response = await request.get(usersEndpoint);

  return response;
}
//-------------------get with param 201------------------------------------
async function getUsers2(request: APIRequestContext) {
const response =  await request.get(usersEndpoint, {
        params :userParam

    });
  return response;
}


//-------------------post 201------------------------------------
async function createUser(request: APIRequestContext) {
const response =  await request.post(usersEndpoint, {
        headers : requestHeaders,
        data: requestBody

    });
  return response;
}



export default { getUsers ,  getUsers2, createUser};