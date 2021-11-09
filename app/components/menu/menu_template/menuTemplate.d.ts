import { fileOpen, setRusLanguage } from '../menu_functions/menuFunctions';
export declare function menuTemplate(): ({
    label: any;
    submenu: ({
        label: any;
        click: typeof fileOpen;
        type?: undefined;
    } | {
        type: string;
        label?: undefined;
        click?: undefined;
    })[];
} | {
    label: any;
    submenu: {
        label: any;
        click: typeof setRusLanguage;
        enabled: boolean;
    }[];
})[];
