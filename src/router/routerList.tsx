import { ImageSourcePropType } from "react-native";
import { HomeScreen } from "../screen/home";
import { ListScreen } from "../screen/list";
import { ProfileScreen } from "../screen/profile";
import { SettingScreen } from "../screen/setting";
import { RouterEnum } from "./constants";

export type RouteOption = {
  [key: string]: unknown;
};

interface RouterInfo {
  name: string;
  component: any;
  title?: string;
  icon?: ImageSourcePropType | undefined;
  selectIcon?: ImageSourcePropType | undefined;
  options?: RouteOption;
}

/** 页面路由 */
export const StackList: Pick<RouterInfo, "name" | "component" | "options">[] = [
  {
    name: RouterEnum.LIST,
    component: ListScreen,
    options: {
      title: "List",
    },
  },
  {
    name: RouterEnum.SETTING,
    component: SettingScreen,
    options: {
      title: "Settings",
    },
  },
];

/** 底部导航栏 */
export const TabList: Pick<
  RouterInfo,
  "name" | "component" | "title" | "icon" | "selectIcon"
>[] = [
  {
    name: RouterEnum.HOME,
    title: "Home",
    icon: require("../assets/images/tabs/home.png"),
    selectIcon: require("../assets/images/tabs/home_s.png"),
    component: HomeScreen,
  },
  {
    name: RouterEnum.PROFILE,
    title: "Profile",
    icon: require("../assets/images/tabs/profile.png"),
    selectIcon: require("../assets/images/tabs/profile_s.png"),
    component: ProfileScreen,
  },
];
