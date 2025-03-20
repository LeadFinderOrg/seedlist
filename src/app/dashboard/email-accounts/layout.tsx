"use client";

import { setTitle } from "@/redux/header-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function EmailAccountLayout({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTitle("Email Accounts"));
    }, [dispatch]);

    return (
        <div>
            {children}
        </div>
    );
}