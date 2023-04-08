function later(delay) {
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve('executed in ' + delay + ' seconds');
      }, delay);
    });
  }
  
  const meh = async () => {
    //   const later_1 = later(1000);
    //   const later_2 = later(1500);
    //   const later_3 = later(5000);
  
    let time = 1000;
    const stuff = [1, 2, 3].map(async (item) => {
      // console.log(time);
      // const something = await later(time);
      //   console.log(something);
      return later(time);
      // time += 2000;
    });
  
    const values = await Promise.all(stuff);
    console.log('my values', values);
  };
  
  meh();