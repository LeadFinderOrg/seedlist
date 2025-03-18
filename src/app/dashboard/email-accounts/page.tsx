"use client";

import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { setTitle } from "@/redux/header-slice";

import EmailAccountsRoot from "./_components/EmailAccountsRoot";

export default function EmailAccountsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Email Accounts"));
  }, [dispatch]);

  return (
    <div className="p-6">
      <EmailAccountsRoot />
    </div>
  );
}
