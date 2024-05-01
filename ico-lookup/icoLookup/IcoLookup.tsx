import * as React from 'react';
import {Label} from '@fluentui/react';
import {SyntheticEvent, useRef, useState} from "react";
import {useOutsideClick} from "./hooks/useOutsideClick";

//todo: implement pagging
//todo: implement search functionality by opening new search dialog like (lookup search in dynamics)
export interface IPCFProps {
    resources:any,
    options:any
}

export const IcoLookup = (props: any) => {
    const [active,setActive] = useState(false);

    const handleClickOutside = ()=>{
        setActive(false)
    }
    const dropdownOutsideRef = useOutsideClick(handleClickOutside);

    const handleSelect = (evt: React.MouseEvent<HTMLDivElement>) => {
        debugger;
        setActive(prevState=>!prevState);
    }
    return (
        <>
            <div ref={dropdownOutsideRef} className="dropdown">
                <div onClick={handleSelect} className={`select ${active?'select-clicked':''}`}>
                    <span className="selected">Selected</span>
                    <div className={`caret ${active?'caret-rotate':''}`}></div>
                </div>
                <ul className={`menu ${active?'menu-open':''}`}>
                    <li className="active">Option2</li>
                    <li>Option3</li>
                </ul>
            </div>
        </>
    )

}
