export function formatDate(date: string) {
    const dateToFormat = new Date(date.replaceAll("-", "/"));
    const dateFormatter = new Intl.DateTimeFormat("en", { dateStyle: "medium" });
    return dateFormatter.format(dateToFormat);
}
