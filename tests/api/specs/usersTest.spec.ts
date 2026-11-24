import{test, expect} from '@playwright/test'  
import usersRequest from '../endPoints/usersEndPoints'
//==================Variables=======================
let response;
let jsonResponse;


//==================Tests===========================
//==================get 200=========================

test.describe('Users API test @api', () => {

    test('check get users response sucess response', async ({request})=>{
     
      response =  await usersRequest.getUsers(request)
      jsonResponse = await response.json()
      console.log(jsonResponse);
      //check status code 
      expect(response.status()).toBe(200);
      // assert on length status
     expect(jsonResponse.length).toBe(100);
});

     //==================get with params 200=========================
    test('check get users response for a specific user', async ({request})=>{
    response =  await usersRequest.getUsers2(request)

       jsonResponse =  await response.json();
       console.log(jsonResponse);

    expect(jsonResponse[0].title).toEqual('qui est esse')  

    });

//==================get response headers 200=========================
    test('check get users response header', async ({request})=>{
    response =  await usersRequest.getUsers(request)
    const headers = await response.headers();
    console.log(headers)
   // assert on headers
    await expect (headers.connection).toEqual('keep-alive')

    });




     //==================post 201=========================
  test('check post user response status code and body', async ({request})=>{
      response = await usersRequest.createUser(request);
        jsonResponse =  await response.json();
        console.log(jsonResponse);
    //asert on response body
    expect(jsonResponse.id).toEqual(101)  

    });
    
});
