const request = require("supertest");
const app = require('../app');

describe('User', ()=>{
    describe('Create User',()=>{
        it("Created a User", async ()=>{
            const result = await request(app).post("/user/create-user").send(
                {
                    firstName: "Test",
                    lastName: "User",
                    address: "Makati",
                    postCode: "1772",
                    phoneNumber: "09123456790",
                    emailAddress: "test_user@yopmail.com",
                    userName: "albert",
                    password: "12345678",
                  }
            );
            expect(result.statusCode).toEqual(200);
        });
    });

    describe('Get Users',()=>{
        it("Get List of User", async ()=>{
            const result = await request(app).get("/user/get-users");
            expect(result.statusCode).toEqual(200);
        });
    });

    describe('Update Users',()=>{
        it("Updated a User", async ()=>{
            const result = await request(app).patch("/user/update-user/test").send({
                firstName: 'John'
            });
            expect(result.statusCode).toEqual(200);
        });
    });

    describe('Delete Users',()=>{
        it("Deleted a User", async ()=>{
            const result = await request(app).delete("/user/delete-user/John");
            expect(result.statusCode).toEqual(200);
        });
    });
});