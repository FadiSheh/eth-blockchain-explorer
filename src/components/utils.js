export const timeAgo = timestamp => {
  if (!timestamp) return ''

  const now = new Date()
  const blockDate = new Date(timestamp * 1000)
  const differenceInSeconds = Math.floor((now - blockDate) / 1000)

  if (differenceInSeconds < 60) {
    return `${differenceInSeconds} secs ago`
  } else if (differenceInSeconds < 3600) {
    return `${Math.floor(differenceInSeconds / 60)} min ago`
  } else if (differenceInSeconds < 86400) {
    return `${Math.floor(differenceInSeconds / 3600)} h ago`
  } else {
    return `${Math.floor(differenceInSeconds / 86400)} d ago`
  }
}
