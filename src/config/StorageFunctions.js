export const getToken = () => {
    return localStorage.getItem("token")
}

export const seUsersStorage = (token,user)=> {
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
    
};

export const removeStorage = () => {
    localStorage.setItem("token");
    localStorage.setItem("user");
    window.location.reload();
}