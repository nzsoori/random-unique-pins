/**
 * Generates a random integer between min and max (inclusive)
 * @param  {number} min = 1000;
 * @param  {number} max=9999
 * @param  {number} stop = 5;//Number of numbers to extract
 * @returns randomly generated integer
 */

export const generateNumbers = (
  pin: number[],
  min: number,
  max: number,
  stop: number
) => {
  for (let i = 0; i < stop; i++) {
    let n: number = Math.floor(Math.random() * (max - min + 1)) + min;
    let arr_num: String = n + "";
    let check: boolean = pin.includes(n);

    for (let si: number = 0; si < arr_num.toString().length - 1; si++) {
      if (parseInt(arr_num[si]) === parseInt(arr_num[si + 1])) {
        check = true;
        break;
      } else {
        if (parseInt(arr_num[si]) > parseInt(arr_num[si + 1])) {
          check = true;
        } else {
          if (parseInt(arr_num[si]) < parseInt(arr_num[si + 1])) {
            check = true;
          }
        }
        check = pin.includes(n);
      }
    }

    if (check === false) {
      pin.push(n);
    } else {
      while (check === true) {
        n = Math.floor(Math.random() * (max - min + 1)) + min;
        check = pin.includes(n);
        arr_num = n + "";
        for (let si: number = 0; si < arr_num.toString().length - 1; si++) {
          if (parseInt(arr_num[si]) === parseInt(arr_num[si + 1])) {
            check = true;
            break;
          } else {
            if (parseInt(arr_num[si]) > parseInt(arr_num[si + 1])) {
              check = true;
            } else {
              if (parseInt(arr_num[si]) < parseInt(arr_num[si + 1])) {
                check = true;
              }
            }
            check = pin.includes(n);
          }
        }

        if (check === false) {
          pin.push(n);
        }
      }
    }
  }

  return pin;
};
// sort();
// let numbers = [];
// // //Sort the array in ascending order
// function sort() {
//   numbers.sort(function (a: number, b: number) {
//     return a - b;
//   });
//   numbers.join(" - ");
//   console.log(numbers);
// }
