const resTime = 1100;

export function View1Api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "View1Api",
        arg: 1,
      });
    }, resTime);
  });
}

export function View2Api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "View2Api",
        arg: 2,
      });
    }, resTime);
  });
}

export function View3Api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "View3Api",
        arg: 3,
      });
    }, resTime);
  });
}
