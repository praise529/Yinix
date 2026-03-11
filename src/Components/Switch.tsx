import { useState } from "react"

type SwitchTypes = {
    active?: boolean;
    title?: string;
    onActive?: () => void
}

export default function Switch({ active, title, onActive }: SwitchTypes) {
    const [Active, SetActive] = useState(active);
    return (
        <div className={`Switch ${Active && "Active"}`} onClick={() => SetActive(!Active ? true : false)}
            title={title}>
        </div>
    )
}