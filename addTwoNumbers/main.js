const l1 = [2, 4, 3];
const l2 = [5, 6, 4];
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  while (l1 || l2) {
    let l1Value = l1 ? l1.val : 0;
    let l2Value = l2 ? l2.val : 0;

    let sum = l1Value + l2Value + carry;
    let newValue = sum

    if (sum > 9) {
      newValue = sum % 10;
      carry = 1;
    }

    if (l1) {
      l1 = l1.next
    }

    if (l2) {
      l2 = l2.next
    }
  }
};

addTwoNumbers(l1, l2);
