import { useState } from "react";

const App = () => {
  const data = [
    { username: "shitty", password: "123", blocked: false },
    { username: "thakkudu", password: "123", blocked: true },
    { username: "niju", password: "123", blocked: false },
    { username: "sanju aunty", password: "123", blocked: true },
  ];

  const [users, setUsers] = useState(data);

  const deleteItem = (index) => {
    console.log("users before", users);
    const deletedarray = [...users.slice(0, index), ...users.slice(index + 1)];
    setUsers(deletedarray);
    console.log("clicked", deletedarray);
  };

  // this blocks and unblocks a user
  const blockChanger = (index) => {
    const items = [...users];
    items[index].blocked = !items[index].blocked;
    setUsers(items);
    console.log("Emoji clicked", index);
  };

  return (
    <div>
      <table className="table-striped">
        <thead>
          <tr>
            <th>UserName</th>
            <th>Password</th>
            <th>Blocked</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>
                <i
                  className={
                    "fa " + (item.blocked ? "fa-frown-o" : "fa-smile-o")
                  }
                  onClick={() => blockChanger(index)}
                />
              </td>
              <td>
                <i
                  className="fa fa-trash"
                  onClick={() => deleteItem(index)}
                  // onClick={() => {
                  //   setUsers(users.filter((u) => u.username != item.username));
                  // }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
