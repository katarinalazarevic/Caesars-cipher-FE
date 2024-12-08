export const ROUTES = {
    MAIN_PAGE: "/",
}

export const toastMessages: { [key: string]: { [method: string]: string } } = {
    
    'login': {
        post: 'loginSuccess',
        error: 'loginError',
    },
    'Company': {
        put: 'companyEditSuccess',
        post: 'companyAddSuccess',
    },
    'logout': {
        post: 'logoutSuccess',
    },
    '/Users': {
        post: 'userAddSuccess',
        put: 'userEditSuccess'
    },
    'ServerErrors' : {
        wrong:'offlineServer',
        offline: 'serverError'
    }
};