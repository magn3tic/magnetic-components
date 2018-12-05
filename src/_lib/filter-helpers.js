
// All Filtering & Sorting Helpers
// -------------------------------------------------



// Remove duplicates from arrays
// - when key is false, will match array item value, otherwise 'key' is an object property
export const removeDuplicates = (items, key=false) => {
  return items.filter((item, index, self) => {
    return index === self.findIndex(t => t[key] === item[key])
  })
}

  
