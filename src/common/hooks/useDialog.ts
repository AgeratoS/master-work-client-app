import { useCallback, useState } from "react";
import { UseDialogReturnType } from "../types";

const useDialog = (initialState?: boolean): UseDialogReturnType => {
    const [state, setState] = useState(initialState ?? false);

    const closeModal = useCallback(() => {
        setState(false);
    }, []);

    const openModal = useCallback(() => {
        setState(true);
    }, []);

    return [state, [openModal, closeModal]];
}

export default useDialog;