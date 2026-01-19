export type ProjectQuery = NonNullable<
  Awaited<ReturnType<ReturnType<typeof queryCollection<"projects">>["first"]>>
>
