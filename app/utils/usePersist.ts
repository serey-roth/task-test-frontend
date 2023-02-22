import { useLocation, useSearchParams, useSubmit } from "@remix-run/react";
import { useEffect, useState } from "react";

export function usePersist() {
    const [persistedEntries, setPersistedEntries] = useState<[string, string][]>([]);

    const submit = useSubmit();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const persistValues = (values: string[], identifier: string) => {
        let formData = new FormData();
        values.forEach((value) => {
            formData.append(value, identifier);
        })
        submit(formData, {
            method: 'get',
            action: location.pathname,
            replace: true,
        });
    }

    const getPersistedValuesByIdentifier = (identifier: string) => {
        const values: string[] = [];
        if (persistedEntries.length > 0) {
            persistedEntries.forEach(([key, value]) => {
                if (value === identifier) {
                    values.push(key);
                }
            });
        } 
        return values;
    }

    useEffect(() => {
        setPersistedEntries(Array.from(searchParams.entries()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        persistedEntries,
        persistValues,
        getPersistedValuesByIdentifier
    }
}