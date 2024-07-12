import type { Category } from "~/types/category"

export default function (category: Category) {
  return category.text !== "All Blogs"
    ? "/blog/category/" + category.text.toLowerCase()
    : "/blog"
}
