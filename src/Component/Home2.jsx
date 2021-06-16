import React from "react";
export default function Home2() {
  const user = window.localStorage.getItem("firstname");
  return (
    <>
      <h1 className="user">Welcome {user} to SnapShot</h1>
    </>
  );
}
