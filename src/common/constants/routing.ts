export const routing = {
    home: () => '/',
    developer: () => '/developer',
    services: () => '/developer/services',
    service: (id: number) => `/developer/services/${id}`,
    account: () => '/developer/account',
    auth: () => '/auth'
}