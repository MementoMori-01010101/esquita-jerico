import React from "react";

const AppNavbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/">
            My Reservation App
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/seminars">Seminars</a>
            </li>
            <li>
              <details>
                <summary>Profile</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a href="#">Setting</a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        localStorage.removeItem("auth");
                      }}
                      href="/login"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
