// Vanilla JS:
// const checkboxFast = document.getElementById("checkFast");
// const checkboxCheap = document.getElementById("checkCheap");
// const checkboxGood = document.getElementById("checkGood");

// const checkboxes = [checkboxFast, checkboxCheap, checkboxGood];
// let lastChecked = null;

// for (const element of checkboxes) {
//   element.addEventListener("change", (e) => {
//     /**
//      * prevent all checkboxes being checked at the same time
//      * if a third checkbox is checked, uncheck box which was checked before
//      */
//     if (getCheckboxCheckedCount() >= checkboxes.length) {
//       if (lastChecked !== e.target) {
//         lastChecked.checked = false;
//       }
//     }
//     lastChecked = e.target;
//   });
// }

// /**
//  * count checked checkboxes
//  * @returns number of total checked input elements
//  */
// function getCheckboxCheckedCount() {
//   let count = 0;
//   checkboxes.forEach((element) => {
//     if (element.checked) {
//       count++;
//     }
//   });
//   return count;
// }

Vue.createApp({
  data() {
    return {
      checkboxes: [],
    };
  },
  watch: {
    checkboxes(newValue) {
      if (newValue.length > 2) {
        this.checkboxes = newValue;
        this.checkboxes.splice(-2, 1);
      }
    },
  },
}).mount("#app");
