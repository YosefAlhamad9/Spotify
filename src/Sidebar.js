import { Home, LibraryMusic, Search } from "@material-ui/icons";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={Home} option="Home" />
      <SidebarOption Icon={Search} option="Search" />
      <SidebarOption Icon={LibraryMusic} option="Your Library" />
      <br />

      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
