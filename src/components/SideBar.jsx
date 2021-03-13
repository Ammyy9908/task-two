import Option from "./Option";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PeopleIcon from "@material-ui/icons/People";
import InfoIcon from "@material-ui/icons/Info";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import LanguageIcon from "@material-ui/icons/Language";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import PublicIcon from "@material-ui/icons/Public";

const SideBar = ({ isSidebar, tablename, setTablename, setExecuted }) => {
  // Hardcoded Array Data which send props to sidenav option component
  const files = [
    { id: 1, title: "Customers", Icon: PeopleIcon },
    { id: 2, title: "employee_territories", Icon: LocationCityIcon },
    { id: 3, title: "order_details", Icon: InfoIcon },
    { id: 4, title: "Orders", Icon: ViewModuleIcon },
    { id: 5, title: "Products", Icon: DonutLargeIcon },
    { id: 6, title: "Regions", Icon: LanguageIcon },
    { id: 7, title: "Suppliers", Icon: LocalShippingIcon },
    { id: 8, title: "Territories", Icon: PublicIcon },
  ];
  return (
    <div className={`sidebar ${isSidebar && "sidebar__enabled"}`}>
      <div className="sidebar__options">
        {files.map((item, index) => {
          return (
            <Option
              title={item.title}
              Icon={item.Icon}
              tablename={tablename}
              setTablename={setTablename}
              setExecuted={setExecuted}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
