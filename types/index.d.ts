export interface Theme {
    value: string;
    label: string;
    icon: string;
}

export interface SidebarLink {
    imgURL: string;
    route: string;
    label: string;
}

export interface ThemeContextType {
    mode: string;
    setMode: (mode: string) => void;
}
