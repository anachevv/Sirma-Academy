function displayProgress(percent) {
    if (percent == 100) {
        return `[${'%'.repeat(percent / 10)}]\nComplete!`;
    }
    return `${percent}% [${'%'.repeat(percent / 10)}${'.'.repeat(10 - (percent / 10))}]\nLoading...`;
}

console.log(displayProgress(30));
console.log(displayProgress(50));
console.log(displayProgress(100));