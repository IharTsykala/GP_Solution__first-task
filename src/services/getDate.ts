const getDate = (objectDate: any) => {
  const year = objectDate.getFullYear()
  let mouth = objectDate.getMonth() + 1
  if (mouth < 10) mouth = `0${mouth}`
  let day = objectDate.getDate()
  if (day < 10) day = `0${day}`
  return `${year}-${mouth}-${day}`
}

export default getDate
