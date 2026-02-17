import React from "react";
import Link from "next/link";

const users = () => {
  return (
    <>
      <main className="h-screen p-4 border flex justify-center items-center">
        <div className=" flex gap-10 flex-col">
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
      </main>
    </>
  );
};

export default users;
