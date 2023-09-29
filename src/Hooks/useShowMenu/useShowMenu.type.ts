import { Link, SubMenu } from "../../Components/MenuItem/menuItem.type";

export interface DesktopMenuType {
    mainItem: SubMenu;
    isShow: boolean;
    isMega: boolean;
    id: string;
    x: number | null;
    y: number | null;
    width: number | null;
}
export interface isForSubMenu {
    SpecialType: "isShowSubMenu";
    data: SubMenu[];
}
export interface isForItems {
    SpecialType: "isShowItem";
    data: SubMenu;
}
export interface isForLinks {
    SpecialType: "isShowLinks";
    data: Link[];
}
export type menuMobileFireProps = isForSubMenu | isForItems | isForLinks;

export interface MobileMenuType {
    menuData: {
        SubMenu: SubMenu[];
        Item: SubMenu;
        Links: Link[];
    };
    isOpen: boolean;
    isShow: {
        SubMenu: boolean;
        Item: boolean;
        Links: boolean;
    };
    goButtonTitle: string;
    goAnimationTo: "Forward" | "Back";
}
