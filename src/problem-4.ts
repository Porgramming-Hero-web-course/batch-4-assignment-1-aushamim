type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  height: number;
  width: number;
};

type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape): number => {
  if (shape.shape === "circle") {
    return +(Math.PI * shape.radius * shape.radius).toFixed(2);
  } else {
    return +(shape.height * shape.width).toFixed(2);
  }
};

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);

const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
console.log(rectangleArea);
