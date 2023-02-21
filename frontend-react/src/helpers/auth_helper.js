import { UserManager } from 'oidc-client';

const settings = {
    authority: "http://localhost:8080/auth/realms/studropica",
    client_id: "frontend_client",
    redirect_uri: "http://localhost:3000/signin-callback.html",
    signoutRedirect: "http://localhost:3000/signin-callback.html",
    response_type: 'code',
    scope: "openid profile product.read",
};

const userManager = new UserManager(settings);

export const getUser = () => {
    return userManager.getUser();
}

export const login = () => {
    return userManager.signinRedirect();
}

export const logout = () => {
    return userManager.signoutRedirect();
}
