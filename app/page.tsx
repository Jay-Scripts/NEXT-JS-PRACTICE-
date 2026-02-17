import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div className="grid place-content-center h-screen gap-2">
      <Link href="/about" className="border border-white p-4 rounded-md">
        About (Pages Classic Routing)
      </Link>
      <Link
        href="/dashboards/admin"
        className="border border-white p-4 rounded-md"
      >
        Admin (Nested Routing)
      </Link>
      <Link
        href="/dashboards/users"
        className="border border-white p-4 rounded-md"
      >
        Users (Dynamic Routing)
      </Link>
    </div>
  );
};

export default page;
