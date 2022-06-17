import React from "react";
import "./side.css";
import { about } from "../Mylinks";

function Sidebar() {
  return (
    <section class="app">
      <aside class="sidebar rounded-br-xl bg-[#bdbfc1]  text-white ">
        {about.map((link) => (
          <header className="bg-[#000080] rounded-b-xl text-xl">{link.name}</header>
        ))}
        <nav class="sidebar-nav">
          <ul>
            <li >
              {about.map((link) => (
                <div className="hover:text-blue-600">
                  {link.links.map((slink) => (
                    <a href={slink.link} className="">
                      <span className="text-black font-bold ">{slink.name}</span>
                    </a>
                  ))}
                </div>
              ))}
              {/* <ul class="nav-flyout">
                <li>
                  <a href="#">
                    <i class="ion-ios-color-filter-outline"></i>Derps
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ion-ios-clock-outline"></i>Times
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ion-android-star-outline"></i>Hates
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ion-heart-broken"></i>Beat
                  </a>
                </li>
              </ul> */}
            </li>
          </ul>
        </nav>
      </aside>
    </section>
  );
}

export default Sidebar;
