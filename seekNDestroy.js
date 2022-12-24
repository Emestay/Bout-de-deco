function removeElement(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  
  const myArray = [1, 2, 3, 4, 5];
  removeElement(myArray, 3); //------> maRrayis now [1, 2, 4, 5]
  removeElement(myArray, 6); //-----> myArray is unchanged



  // OU //

  function removeElements(array, condition) {
    return array.filter(element => !condition(element));
  }
  
  const myArrayBis = [1, 2, 3, 4, 5];
  const newArray = removeElements(myArrayBis, element => element % 2 === 0);
  // newArray is [1, 3, 5]