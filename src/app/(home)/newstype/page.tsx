import { findAllNewsType } from "@/services/newstype.service";
import React from "react";

export default async function NewsTypePage() {
  
    const data = await findAllNewsType();

  return <div>{JSON.stringify(data)}</div>;
}
