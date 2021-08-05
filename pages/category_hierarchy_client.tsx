import * as React from "react";
import useSWR from "swr";
import { CategoryHierarchy } from "../lib/category_hierarchy";
import { fetcher } from "../lib/api";

export default function Page() {
  const { data, error } = useSWR("/categories", fetcher);
  if (error) {
    console.error("Load error", error);
    return <div>Failed to load</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  return <CategoryHierarchy hierarchy={data} date={new Date().toISOString()} />;
}
