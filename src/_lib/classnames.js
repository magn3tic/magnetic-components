
// A very basic version of classnames

const classnames = (classarr=false, classmap=false) => {
  let result = ''

  if (classarr)
    for (let i=0; i < classarr.length; i++) {
      result += ` ${classarr[i]}`
    }

  if (classmap)
    for (let key in classmap) {
      if (classmap[key]) {
        result += ` ${key}`
      }
    }

  return result.trim()
}


export default classnames