export const register = (data) => {
    try {
        const usersStorage = JSON.parse(localStorage.getItem('users')) 
        const users = usersStorage != null ? usersStorage : [];
        const already = users.find(us=> us.email === data.email) != null;
        if(already) {
            throw {error:"Validation", msg: "User Already exists"};
        }
        users.push(data);
        localStorage.setItem('users', JSON.stringify(users));
    } catch(err) {
        throw {error:err, msg: err.msg ? err.msg : "Unexpected Error"};
    }
}

export const login = (data) => {
    try {
        const usersStorage = JSON.parse(localStorage.getItem('users')) 
        const user = usersStorage.find(usr => usr.email === data.email);
        if(user) {
           return user.password === data.password;
        } 
        return false;
    } catch(err){
        throw {error:err, msg: "Unexpected Error"};
    }
}