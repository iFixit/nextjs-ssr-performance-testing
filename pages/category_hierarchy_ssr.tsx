import * as React from "react";
import { CategoryHierarchy } from "../lib/category_hierarchy";
import { fetcher } from "../lib/api";

export default CategoryHierarchy;

export async function getServerSideProps(context) {
  const hierarchy = await fetcher("/categories");
  return {
    props: {
      hierarchy,
      date: new Date().toISOString()
    }
  };
}
