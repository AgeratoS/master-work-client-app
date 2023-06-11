import { useAuth } from "@/common/hooks";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect } from "react";

function AuthProcess() {

    const router = useRouter();
    const authObject = useAuth();

    useEffect(() => {

        if (window.localStorage.getItem('token') === undefined) {
            if (authObject.isAuth) {
                window.localStorage.setItem('token', authObject.token!);
                router.replace('/developer');
            }
            else {
                router.replace('/');
            }
        } else {
            router.replace('/developer');
        }
    }, [authObject.token]);

    return <></>
}

export default AuthProcess;