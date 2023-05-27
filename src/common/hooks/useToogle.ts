import { useCallback, useState } from "react"

const useToggle = (initialState: boolean) => {
    const [state, setState] = useState<boolean>(initialState);

    const toggle = useCallback(() => {
        if (state) {
            setState(false);
        }
        else {
            setState(true);
        }
    }, [state]);

    return [state, toggle] as [boolean, VoidFunction];
}

export default useToggle;