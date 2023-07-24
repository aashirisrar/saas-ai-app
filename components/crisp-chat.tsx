"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0229cf9c-f223-40da-a5f5-9aca0dc2c2e4");
  }, []);

  return null;
};
