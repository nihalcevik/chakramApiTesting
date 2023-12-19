const chakram = require('chakram'),
 expect = chakram.expect;

describe("User Module", function() {

   
     it("GET - GetUserInfo Invalid User", function () {
         const resBody ={
            "code": 1,
            "type": "error",
            "message": "User not found"
        };

        const response = chakram.get("https://petstore.swagger.io/v2/user/testcan1234");
        expect(response).to.have.status(404);
        expect(response).to.comprise.of.json(resBody); 
        expect(response).to.have.header('content-type', 'application/json'); 
        return chakram.wait();
     });


     it("POST - CreateUser", function () {
         const resBody = {"code":200,"type":"unknown","message":"1233213210"};

        const body = {
            "id": 1233213210,
            "username": "testcan129870",
            "firstName": "test",
            "lastName": "can",
            "email": "can.seker.test@test.com",
            "password": "test12",
            "phone": "05342342343",
            "userStatus": 0
          };
        const response = chakram.post("https://petstore.swagger.io/v2/user", body);
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(resBody); 
        expect(response).to.have.header('content-type', 'application/json'); 
        return chakram.wait();
     });


     it("GET - GetUserInfo", function () {
      const resBody = {
         "id": 1233213210,
         "username": "testcan129870",
         "firstName": "test",
         "lastName": "can",
         "email": "can.seker.test@test.com",
         "password": "test12",
         "phone": "05342342343",
         "userStatus": 0
     };

        const response = chakram.get("https://petstore.swagger.io/v2/user/testcan129870");
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(resBody);
        expect(response).to.have.header('content-type', 'application/json'); 
        return chakram.wait();
     });


     it("DELETE - DeleteUser", function () {
      const resBody = {
         "code": 200,
         "type": "unknown",
         "message": "testcan129870"
     };
        const response = chakram.delete("https://petstore.swagger.io/v2/user/testcan129870");
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(resBody); 
        expect(response).to.have.header('content-type', 'application/json'); 
        return chakram.wait();
     });


     it("PUT - UpdateUser", function () {
      const resBody = {
         "code": 200,
         "type": "unknown",
         "message": "12332132110"
     };

        const body = {
            "id": 12332132110,
            "username": "testcan1298700",
            "firstName": "testt",
            "lastName": "cann",
            "email": "can.seker.test00@test.com",
            "password": "test120",
            "phone": "053423423430",
            "userStatus": 1
          };
        const response = chakram.put("https://petstore.swagger.io/v2/user/testcan1234", body);
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(resBody); 
        expect(response).to.have.header('content-type', 'application/json'); 
        return chakram.wait();
     });


});