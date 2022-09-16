class ZeroException extends Error {}
class OneException extends Error {}

async function doSomething(): Promise<never> {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    throw new ZeroException("I'm zero");
  } else if (random === 1) {
    throw new OneException("I'm the one");
  }

  throw new Error("I'm crazy error");
}

async function main(): Promise<void> {
  try {
    return await doSomething();
  } catch (err) {
    if (err instanceof ZeroException) {
      console.error("ZeroException", err.message);
    } else if (err instanceof OneException) {
      console.error("OneException", err.message);
    } else if (err instanceof Error) {
      console.error("Error", err.message);
    }

    console.error("Another error", e);
  }
}

main();
