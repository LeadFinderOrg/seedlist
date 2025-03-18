"use client";

import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { setTitle } from "@/redux/header-slice";

import CampaignPageRoot from "./_components/CampaignPageRoot";

export default function CampaignPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Campaigns"));
  }, [dispatch]);

  return (
    <div className="p-6">
      <CampaignPageRoot />
    </div>
  );
}
