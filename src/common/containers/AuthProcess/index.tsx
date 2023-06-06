import { useAuth } from "@/common/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";

function AuthProcess() {

    const router = useRouter();
    const authObject = useAuth();

    useEffect(() => {
        if (authObject.isAuth) {
            router.replace('/developer');
        }
        else {
            router.replace('/auth');
        }
    }, []);

    return <></>
}

export default AuthProcess;