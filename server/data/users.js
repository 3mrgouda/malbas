import bcrypt from "bcrypt";

const users = [
  {
    name: "admin",
    email: "a@a.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "John",
    email: "b@b.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "Jane",
    email: "c@c.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "3mr",
    email: "amr@gmail.com",
    password: bcrypt.hashSync("50505", 10),
  },
];
export default users;
