'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';



export enum ComponentType {
    NAV_BAR,
    SIDE_BAR
}

const NavBar = ({ closeSideBar = ()=>{} , style = "", textColor = "text-white", activeTextColor = "text-white", componentType = ComponentType.NAV_BAR }): JSX.Element => {

    const router = usePathname();

    let tabs = [
        { id: 1, label: "Accueil", link: "/" },
        { id: 2, label: "Produits", link: `${router !== '/' ? '/#product' : '#product'}` },
        { id: 3, label: "Solutions", link: `${router !== '/' ? '/#solutions' : '#solutions'}` },
        { id: 4, label: "Références", link: `${router !== '/' ? '/#references' : '#references'}` },
        { id: 5, label: "Contact", link: "/contact-us" },
    ];

    let [activeTab, setActiveTab] = useState<number>(tabs[0].id);

    useEffect(() => {

        const currentTab = tabs.find(tab => router === tab.link);

        if (currentTab) {
            setActiveTab(currentTab.id);
        }
    }, [router]);

    return (
        <nav className={`${style} w-full`}>
            <ul className={` ${componentType === ComponentType.NAV_BAR ? '' : 'flex-col'} flex justify-end items-center py-1 px-2 gap-4 text-base capitalize tracking-wider`}>
                {tabs.map((tab) => (
                    <li key={tab.id} className={` ${componentType === ComponentType.NAV_BAR ? '' : 'border-b border-gray-200 pb-3 w-full flex justify-center items-center'} `}>
                        <Link href={tab.link} onClick={() => {setActiveTab(tab.id); closeSideBar(); }} className={`${activeTab === tab.id ? activeTextColor : textColor} font-semibold hover:border-b border-white`} >
                            {tab.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar