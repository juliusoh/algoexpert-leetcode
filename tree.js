let categories = [
  { id: 'animals', 'parent': null},
  { id: 'mammals', 'parent': "animals"},
  { id: 'cats', 'parent': 'mammals'},
  { id: 'dogs', 'parent': 'mammals'},
  { id: 'chihuahua', 'parent': 'dogs'},
  { id: 'labrador', 'parent': 'dogs'},
  { id: 'persian', 'parent': 'cats'},
  { id: 'siamese', 'parent': 'cats'}
]

let makeTree = (categories, parent) => {
  let node = {}
  const filterCategories = categories.filter(category => category.parent === parent)
  const forEachStuff = filterCategories.forEach(category => node[category.id] = makeTree(categories, category.id))
  console.log(node)
  return node
}

makeTree(categories, null)