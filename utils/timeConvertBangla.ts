export const formatPublishedDateTime = (
  publishedAt: string | Date
): string => {
  const date = new Date(publishedAt);

  const formattedDate = new Intl.DateTimeFormat("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(date);

  const formattedTime = new Intl.DateTimeFormat("bn-BD", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Dhaka",
  }).format(date);

  return `${formattedDate} | ${formattedTime} মিনিট`;
};