import { useLocation, useSearchParams, useSubmit } from "@remix-run/react";
import { useEffect, useState } from "react";

export function usePersist() {
    const [persistedValues, setPersistedValues] = useState<string[]>([]);

    const submit = useSubmit();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const persistValues = (values: string[]) => {
        let formData = new FormData();
        values.forEach((value) => {
            formData.append(value, 'active');
        })
        submit(formData, {
            method: 'get',
            action: location.pathname,
            replace: true,
        });
    }

    useEffect(() => {
        setPersistedValues(Array.from(searchParams.keys()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        persistedValues,
        persistValues
    }
}