import { InavbarData } from "./helper";

export const navData: InavbarData[] = [
    {
        routerLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'DASHBORD'
    },
    {
        routerLink: 'Master',
        icon: 'fal fa-store',
        label: 'MASTER DATA',
        items: [
            {
                routerLink: 'Master/revan',
                label: 'REASSIGN VAN',
            },
            {
                routerLink: 'Master/vand',
                label: 'VAN DETAILS',
            },
            {
                routerLink: 'Master/kmtransaction',
                label: 'KM TRANSACTIONS',
            },
            {
                routerLink: 'Master/lastupdate',
                label: 'LAST KM UPDATE',
            },
        ]
    },
    {
        routerLink: 'Sales',
        icon: 'fal fa-money-bill',
        label: 'SALES',
        items: [
            {
                routerLink: 'sales/dsr',
                label: 'DAILY SALES REPORT',
            },
            {
                routerLink: 'sales/posting',
                label: 'POSTING',
            },
        ]
    },
    {
        routerLink: 'incentive',
        icon: 'fal fa-gift',
        label: 'INCENTIVE'
    },
    {
        routerLink: 'target',
        icon: 'fal fa-fish',
        label: 'TARGET'
    },
    {
        routerLink: 'android',
        icon: 'fal-brands fa-android',
        label: 'ANDROID SUPPORT'
    },
]