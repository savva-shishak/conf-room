import { useState} from "react";

export function useWindow() {
    const [isLoading] = useState(true);

    return {
        isLoading
    }
}