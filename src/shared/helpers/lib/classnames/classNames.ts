export const classNames = (
  ...args: Array<string | string[] | Record<string, boolean>>
): string => {
  return args
    .filter(Boolean)
    .map((item) => {
      if (typeof item === "string") return item;

      if (Array.isArray(item)) return item.join(" ");

      return Object.entries(item)
        .filter(([_, value]) => Boolean(value))
        .map(([key]) => key)
        .join(" ");
    })
    .join(" ");
};
