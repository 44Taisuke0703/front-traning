import { axiosInstance } from "../infra/fetch"
import type { Friend } from "../model/friend"
export const postFriend = async (data: Friend) => {
    const res = await axiosInstance.post<Friend>("/friend", data);
    return res.data;
}
export const putFriend = async (id: string, data: Friend) => {
    const res = await axiosInstance.put<Friend>(`/friend/${id}`, data);
    return res.data;
}
export const deleteFriend = async (id: string) => {
    const res = await axiosInstance.delete<Friend>(`/friend/${id}`);
    return res.data;
}