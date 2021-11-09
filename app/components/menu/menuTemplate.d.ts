import { fileOpen, setRusLanguage } from './menuFunctions';
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
