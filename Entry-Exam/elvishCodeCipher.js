function decrypt(s, n) {
    var message = "";

    for (let i = 0; i < s.length; i++) {
        let charCode = s[i].charCodeAt(0) - n;
        let char = String.fromCharCode(charCode);
        message += char;
    }

    return message;
}

console.log(decrypt('Uifsf!jt!b!tfdsfu"', 1));
console.log(decrypt('Wkurz#lw#lq#wkh#iluh$', 3));
console.log(decrypt('Fwfltws', 5));
console.log(decrypt('Fwfltws', 26));