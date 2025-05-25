export interface Friend {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    birthday: string;
    memo: string;
}
export type FriendInput = {
    name: string;
    email: string;
    phone: string;
    address: string;
    birthday: string;
    memo: string;
};

export type FriendPagination = {
    totalCount: number;
    items: Friend[];
};