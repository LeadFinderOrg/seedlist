"use client";

import { setTitle } from "@/redux/header-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function CampaignLayout({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTitle("Campaigns"));
    }, [dispatch]);

    return (
        <div>
            {children}
        </div>
    );
}
