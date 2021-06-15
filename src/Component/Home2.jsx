import React from "react";
export default function Home2() {
  const user = window.localStorage.getItem("full_name");
  return (
    <>
      <h1 className="user">Welcome {user} to SnapShot</h1>
    </>
  );
}
