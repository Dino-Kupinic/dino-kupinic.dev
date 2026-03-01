export default function () {
  const birthday = +new Date(2006, 4, 25)
  return ~~((Date.now() - birthday) / 31557600000)
}
