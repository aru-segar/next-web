"use client";

import { useEffect } from "react";
import { writeClient } from "@/sanity/lib/write-client";

const IncrementViews = ({ id, totalViews }: { id: string; totalViews: number }) => {
  useEffect(() => {
    writeClient.patch(id).set({ views: totalViews + 1 }).commit();
  }, [id, totalViews]);

  return null;
};

export default IncrementViews;
