import { UserDetails } from "@/types";
import { Subscription, User } from "@supabase/auth-js";
import { createContext } from "react";

type UserContextType = {
    accessToken: string | null;
    user: User | null;
    userDetails: UserDetails | null;
    isLoading: boolean;
    subscription: Subscription | null
};


export const UserContext = createContext<UserContextType | undefined>(
    undefined
);


//1:35:58