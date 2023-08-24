export const validate = {
  string: (value: string) => value.replace(/[^a-zA-ZА-Яа-яЁё]/gi, ""),
  number: (value: string) => value.replace(/[^\d]/g, ""),
};
