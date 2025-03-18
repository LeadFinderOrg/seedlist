"use client";

import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { setTitle } from "@/redux/header-slice";

const SettingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Settings"));
  }, [dispatch]);

  return <div className="p-6">Settings page</div>;
};

export default SettingPage;
