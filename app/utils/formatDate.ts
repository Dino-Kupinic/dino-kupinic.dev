export default function (date: Date) {
  const { locale } = useI18n()
  return date.toLocaleDateString(locale.value, {
    year: "numeric",
    month: "long",
  })
}
