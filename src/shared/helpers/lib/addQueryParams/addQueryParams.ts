type ParamsType = Record<string, string>

export function addQueryParams(params: ParamsType = {}) {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([key, value]) => {
        if (!value) return

        searchParams.set(key, value)
    })

    window.history.pushState(
        null, 
        "", 
        `${window.location.pathname}?${searchParams.toString()}`
    );
}