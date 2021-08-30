module.exports = function check(str, bracketsConfig) {
    // your solution
    let res = false;
    let s_str = str;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            let brackEr = bracketsConfig[j][0] + bracketsConfig[j][1];
            s_str = s_str.replace(brackEr, "");
        }
    }
    if (s_str == 0) {
        res = true;
    }

    return res;
};

// console.log(check("()", [["(", ")"]])); // -> верно
// console.log(
//     check("| () |", [
//         ["(", ")"],
//         ["|", " | "],
//     ])
// ); // -> true

// // "()"       "(", ")"   // -> верно
