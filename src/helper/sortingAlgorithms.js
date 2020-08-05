export const getMergeSortAnimations = (array) => {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSort(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
};

// const mergeSort = (arr, aux, low, high, animations) => {
//   if (low === high) {
//     return;
//   }
//   const mid = Math.floor((low + high) / 2);
//   mergeSort(arr, aux, low, mid, animations);
//   mergeSort(arr, aux, mid + 1, high, animations);
//   doMerge(arr, low, mid, high, aux, animations);
// };
const mergeSort = (mainArray, startIdx, endIdx, auxiliaryArray, animations) => {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSort(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSort(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
};
const doMerge = (
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) => {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
};
// const doMerge = (arr, aux, low, mid, high) => {
//   for (let k = low; k <= high; k++) {
//     aux[k] = arr[k];
//   }

//   let i = low,
//     j = mid + 1;
//   for (let k = low; k <= high; k++) {
//     if (i > mid) arr[k] = aux[j++];
//     else if (j > high) arr[k] = aux[i++];
//     else if (aux[j] < aux[i]) arr[k] = aux[j++];
//     else arr[k] = aux[i++];
//   }
// };

export const insertionSortAnimation = (array) => {
  const animations = [];
  const colorChange = [];
  let aux = [...array];
  console.log(aux);
  let i = 1,
    j = 0;
  while (i < aux.length) {
    j = i - 1;
    colorChange.push([i, j]);
    let temp = aux[i];
    while (j >= 0 && aux[j] > temp) {
      colorChange.push([j, j + 1]);
      animations.push([j, aux[j + 1]]);
      animations.push([i, aux[j]]);
      aux[j + 1] = aux[j];
      j--;
    }
    aux[j + 1] = temp;
    i++;
    console.log(aux);
  }
  console.log(aux);
  const anims = { colorChange, animations };
  return anims;
};
