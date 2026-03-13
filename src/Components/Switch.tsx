import { useState } from "react"

type SwitchTypes = {
    active?: boolean;
    title?: string;
    onClick?: any
}

export default function Switch({ active, title, onClick }: SwitchTypes) {
    const [Active, SetActive] = useState(active);
    return (
        <div className={`Switch ${Active && "Active"}`} onClick={() => {
            SetActive(!Active ? true : false);
            onClick();
        }}
            title={title}>
        </div>
    )
}