import supertest from "supertest"
import { app } from "../app.js"

const request = supertest(app)

describe("Testing the testing environment", () => {

    it("should test that true is true", () => {
        expect(true).toBe(true);
    });

})

describe("Testing the products endpoints", () => {

    it("should test that the /test endpoint is returning a success message", async () => {
        const response = await request.get("/test")

        expect(response.status).toBe(200)
        expect(response.body.message).toBe("Test success")
    })

})