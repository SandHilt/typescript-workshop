function mainCallback(callback: (a: number) => void) {
    callback(100);
}

mainCallback((a) => console.log(a)); // 100