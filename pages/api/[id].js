import fs from "fs";
import path from "path";
import users from "@/data/db";

const handler = (req, res) => {
  if (req.method === "DELETE") {
    const { id } = req.query;

    const dbPath = path.join(process.cwd(), "data", "db.json");
    const data = fs.readFileSync(dbPath);
    const parsedData = JSON.parse(data);

    const isUser = parsedData.users.some(
      (user) => String(user.id) === String(id)
    );

    if (isUser) {
      const newUsers = parsedData.users.filter(
        (user) => String(user.id) !== String(id)
      );

      const err = fs.writeFileSync(
        dbPath,
        JSON.stringify({ ...parsedData, users: newUsers })
      );
      if (err) {
        //code
      } else {
        return res.json({ message: "user removed" });
      }
    } else {
      return res.status(404).json({ message: "user not found!" });
    }
  } else if (req.method === "PUT") {
    const { id } = req.query;
    const { username, email, password } = req.body;

    const dbPath = path.join(process.cwd(), "data", "db.json");
    const data = fs.readFileSync(dbPath);
    const parsedData = JSON.parse(data);

    const isUser = parsedData.users.some(
      (user) => String(user.id) === String(id)
    );
    if (isUser) {
      parsedData.users.some((user) => {
        if (String(user.id) === String(id)) {
          user.username = username
          user.email = email
          user.password = password

          return true;
        }
        const err = fs.writeFileSync(dbPath, JSON.stringify({ ...parsedData }));
        if (err) {
          //code
        } else {
          return res.json(parsedData);
        }
      });
    } else {
      return res.status(404).json({ message: "user not found" });
    }
  }
};

export default handler;
