const array = ['', '', '', '', ''];


function hasEmptyValues(ary) {
  let l = ary.length,
      i = 0;
  let j = 0
  for (i = 0; i < l; i += 1) {
      if (!ary[i]) {
          j++;

      }
  }

  return j
}

const ahha = array.filter(i => i === "")
console.log(ahha.length)