function methodDecorator(): MethodDecorator {
  return (target, propertyKey, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
      console.log(`Calling ${propertyKey.toString()} with arguments`, args);
      const result = originalMethod.apply(this, args);
      console.log(`Called ${propertyKey.toString()}`);
      console.log('methodDecorator',target, propertyKey, descriptor);
      return result;
    };
  };
}

function propertyDecorator(): PropertyDecorator {
  return (target, propertyKey) => {
    console.log("property decorator", target, propertyKey);
  };
}

function parameterDecorator(): ParameterDecorator {
  return (target, propertyKey, parameterIndex) => {
    console.log("parameter decorator", target, propertyKey, parameterIndex);
  };
}

function classDecorator(): ClassDecorator {
  return (target) => {
    console.log("class decorator", target);
  };
}

@classDecorator()
class Circle {
  @propertyDecorator()
  pi: number = 3.1415;

  @methodDecorator()
  radius(@parameterDecorator() r: number): number {
    return this.pi * r * r;
  }
}

const circle = new Circle();
const radiusC = circle.radius(10);
console.log(radiusC); // 314.15
