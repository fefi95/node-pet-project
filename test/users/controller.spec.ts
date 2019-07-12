import { User } from "../../src/users/models";
import { login } from "../../src/users/controller";

describe("Controller ", () => {
  describe("#login ", () => {
    it("should return a token", () => {
      const user: User = {
        name: "test",
        last_name: "test",
        password: "pass",
        email: "test@test.com",
        avatar: ""
      }
      const result = login(user);
      expect(typeof result).toBe("string");
      expect(result).not.toBe("");
    });

    it("should throw error", () => {
      expect(() => login(null)).toThrowError();
    });
  });
});