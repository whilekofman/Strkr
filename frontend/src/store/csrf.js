async function csrfFetch(url, options = {}){
    options.method = options.method || "GET";

    options.headers = options.headers || {};

    if (options.method.toUpperCase() !== 'GET'){
        options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json';

        options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token'); 
    } 
    const res = await fetch(url, options);
    debugger

    if (res.status >= 400) throw res;

    return res
}

// export const storeCSRFToken = response => {
//     const csrfToken = response.headers.get("X-CSRF-Token")
//     if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
// }

// export const restoreCSRF = async () => {
//     const response = await csrfFetch('/api/session');
//     storeCSRFToken(response);
//     return response
// }

export default csrfFetch;