import { atom } from "nanostores";

export const userStore = atom<{ email: string; password: string } | null>(null);

export const setUser = (user: { email: string; password: string }) => {
    userStore.set(user);
};

export const logout = () => {
    userStore.set(null);
};
