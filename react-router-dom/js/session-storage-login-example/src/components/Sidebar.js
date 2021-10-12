import { Link } from "react-router-dom";

import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const menus = [
    { name: "대시보드", path: "/" },
    { name: "회원 관리", path: "/members" },
    { name: "캐시 관리", path: "/cashes" },
  ];

  return (
    <div className="sidebar">
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <SidebarItem menu={menu} />
          </Link>
        );
      })}
    </div>
  );
}
