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
  const anims = [];
  let aux = [...array];
  console.log(aux);
  let i = 1,
    j = 0;
  while (i < aux.length) {
    j = i - 1;
    colorChange.push([j, i]);
    colorChange.push([j, i]);
    anims.push([j, i]);
    anims.push([j, i]);
    let temp = aux[i];
    while (j >= 0 && aux[j] > temp) {
      colorChange.push([j + 1, j]);
      colorChange.push([j + 1, j]);
      // animations.push([j, aux[j + 1]]);
      animations.push([j + 1, aux[j]]);
      anims.push([j + 1, j]);
      anims.push([j + 1, j]);
      // animations.push([j, aux[j + 1]]);
      anims.push([j + 1, aux[j]]);
      aux[j + 1] = aux[j];
      j--;
    }
    colorChange.push([j + 1, i]);
    animations.push([j + 1, temp]);
    anims.push([j + 1, i]);
    anims.push([j + 1, temp]);
    aux[j + 1] = temp;
    i++;
    console.log(aux);
  }
  console.log(aux);
  const anim = { colorChange, animations };
  return anims; //anims
};

export const quickSortAnimation = (array) => {
  let left = 0;
  let right = array.length;
  let animations = [];
  var pivot = array[Math.floor((right + left) / 2)],
    i = left,
    j = right;

  while (i <= j) {
    animations.push([i, i]);
    animations.push([j, j]);
    while (array[i] < pivot) {
      animations.push([i, array[i]]);
      i++;
      animations.push([i, i]);
    }

    while (array[j] > pivot) {
      animations.push([j, array[j]]);
      j--;
      animations.push([j, j]);
    }

    if (i <= j) {
      // swap(array, i, j);
      animations.push([i, i]);
      animations.push([j, j]);
      animations.push([i, array[j]]);
      animations.push([j, array[j]]);
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      i++;
      j--;
    }
  }
  console.log(array);
  return animations;
};
