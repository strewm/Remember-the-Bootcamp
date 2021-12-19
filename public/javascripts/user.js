import { handleErrors } from './utils.js';

export const fetchUser = async() => {
    const userRes = await fetch('/users/current')
    const { user } = await userRes.json();
    return user;
}
