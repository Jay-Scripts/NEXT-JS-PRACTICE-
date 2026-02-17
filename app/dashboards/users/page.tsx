import React from "react";
import Link from "next/link";

const users = () => {
  return (
    <>
      <nav className="p-4 border flex justify-between items-center">
        <h1>Users Dashboards</h1>
        <div className=" flex gap-10">
          <li>
            <Link href="/dashboards/users/1">User 1</Link>{" "}
          </li>
          <li>
            <Link href="/dashboards/users/2">User 2</Link>{" "}
          </li>
          <li>
            <Link href="/dashboards/users/3">User 3</Link>{" "}
          </li>
          <li>
            <Link href="/dashboards/users/4">User 4</Link>{" "}
          </li>
          <li>
            <Link href="/dashboards/users/5">User 5</Link>{" "}
          </li>
        </div>
      </nav>
      ;
    </>
  );
};

export default users;
