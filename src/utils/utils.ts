export function debounce() {}

export const consoleLog = (label?: string, data?: any) => {
  console.log(`%c ${label}`, "background: #222; color: #bada55", data);
};

// console.log("%c Oh my heavens! ", "background: #222; color: #bada55");

// export function debounce(func, wait, immediate) {
//   let timeout: any;

//   return function () {
//     var context = this,
//       args = arguments;

//     var callNow = immediate && !timeout;

//     clearTimeout(timeout);

//     timeout = setTimeout(function () {
//       timeout = null;

//       if (!immediate) {
//         func.apply(context, args);
//       }
//     }, wait);

//     if (callNow) func.apply(context, args);
//   };
// }
