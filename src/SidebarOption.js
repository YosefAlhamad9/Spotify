import "./SidebarOption.css";

const SidebarOption = ({ Icon, option }) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  );
};

export default SidebarOption;
