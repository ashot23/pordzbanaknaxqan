var a = 415
var b = 20
var g = [0, 1, 22, 3, 4]
var j = {

    anun: "aper",
    azganun: "grdnyan"

}

//պարզ թվերնեն 1,2,3,5,7

// function parztver(params) {
//     var p = 0
//     var parz = []
//     parz[0] = 1
//     var tiv = 50
//     for (let i = 2; i <= tiv; i++) {

//         for (let j = 2; j <= tiv; j++) {

//             if (i != j && i % j != 0) {

//                 p = p + 1

//                 if (p == tiv - 2 && j == tiv) {


//                     parz.push(i)

//                     p = 0
//                 } else if (p < tiv - 2 && j == tiv) {

//                     p = 0
//                 }




//             }

//         }


//     }
//     return parz
// }



// console.table(parztver());



// function fs(x) {

//     if (x == 10) {

//         return false
//     } else {
//         return true
//     }


// }


// var x = 0
// while (fs(x)) {

//     console.log(x);

//     x++

// }

// for (let i = 0; fs(i); i++) {
//     console.log(i);

// }

// class kov {


//     constructor(x, y) {

//         this.x = x
//         this.y = y
//     }

//     gnac() {

//         this.x++
//             if (this.x == 10) {
//                 return "hasar"
//             }


//     }
// }


// var vochxar = new kov(3, 4)
// console.log(vochxar.gnac());


//var arr = [1, 2, -5, -10, -15, 10, 10, 2]

// // 0 < 0  0  < 2 // 0< - 5 
// function Նվազման(x) {

//     for (let i = 0; i < x.length; i++) {

//         for (let j = 0; j < x.length; j++) {

//             if (x[i] > x[j]) {
//                 var hin = x[i]
//                 x[i] = x[j]
//                 x[j] = hin


//             }


//         }

//     }

//     return x


// }

// function Աջման(x) {

//     for (let i = 0; i < x.length; i++) {

//         for (let j = 0; j < x.length; j++) {

//             if (x[i] < x[j]) {
//                 var hin = x[i]
//                 x[i] = x[j]
//                 x[j] = hin


//             }


//         }

//     }

//     return x


// }
// console.log(Աջման(arr));
// console.log(Նվազման(arr));


//x+2*x = 4

// var as = 15
// console.log(typeof(as));

// function gumar(params) {
//     var pr = prompt("havasarum")

//     var b = 0


//     for (let i = 0; i < pr.length; i++) {
//         if (pr[i] == "x") {

//             //4*x+x
//             if (pr[i - 1] == "*") {
//                 if (typeof(parseInt(pr[i - 2])) == "number") {

//                     b += parseInt(pr[i - 2])

//                 }



//             } else if (!pr[i - 1]) {
//                 b += 1
//             }

//         }

//     }
//     return b
// }
// console.log(gumar());
// var aper = 15.12
// var s = "0.1"
// console.log(s.split());

// function klol(params) {
//     var mekel = aper.toString()
//     var verjn = mekel.split(".")
//         // "15.1"
//     for (let i = 0; i < mekel.length; i++) {
//         if (mekel[i] == ".") {
//             if (mekel[i + 2]) {

//                 mekel.pop()

//             }
//         }

//     }

//     return Math.floor(mekel)



// }
//console.log(klol(aper));


// var i = 0
// while (i < 1) {
//     i += 0.1

// }

// var as = 4.3000112
// var ss = "4.101"


// function klor(as) {

//     if (parseInt(as) == as) {
//         return as
//     } else {
//         var tox = as.toString()
//             //4.101
//         var zang = tox.split(".")

//         // [4,101]
//         if (zang[1].length > 1) {
//             zang[1] = zang[1][0]
//         }
//         var verjnakan = zang[0] + "." + zang[1]


//         return parseFloat(verjnakan)
//     }



// }




// function astch(x, y) {

//     var k = 1
//     for (let i = 0; i < y; i++) {

//         k *= x
//     }
//     return k




// }
// console.log(astch(2, 3));


// console.log(armat(25, 2));


// var array = [0, 5, -10, 4, 1, -10, -10, -50]

// function մինիմում(zangv) {

//     for (let i = 0; i < zangv.length; i++) {

//         for (let j = 0; j < zangv.length; j++) {

//             if (zangv[i] <= zangv[j]) {
//                 var dik = zangv[i]
//                 zangv[i] = zangv[j]
//                 zangv[j] = dik

//             }

//         }

//     }

//     return zangv[0]

// }
// console.log(մինիմում(array));


// var array = [0, 5, -10, 4, 1, -10, -10, -50, 100]

// function մաքսիմում(zangv) {

//     for (let i = 0; i < zangv.length; i++) {

//         for (let j = 0; j < zangv.length; j++) {

//             if (zangv[i] >= zangv[j]) {
//                 var dik = zangv[i]
//                 zangv[i] = zangv[j]
//                 zangv[j] = dik

//             }

//         }

//     }

//     return zangv[0]

// }
// console.log(մաքսիմում(array));
//կարանք 2-սը իրար զարգենք 


// var array = [0, 5, -10, 4, 1, -10, -10, -50, 100]

// function մաքսիմին(zangv, mintemax) {

//     for (let i = 0; i < zangv.length; i++) {

//         for (let j = 0; j < zangv.length; j++) {
//             if (mintemax == "max") {
//                 if (zangv[i] >= zangv[j]) {
//                     var dik = zangv[i]
//                     zangv[i] = zangv[j]
//                     zangv[j] = dik

//                 }
//             } else if (mintemax == "min") {

//                 if (zangv[i] <= zangv[j]) {
//                     var dik = zangv[i]
//                     zangv[i] = zangv[j]
//                     zangv[j] = dik

//                 }

//             }

//         }

//     }

//     return zangv[0]

// }
// console.log(մաքսիմին(array, "min")); //-50
// console.log(մաքսիմին(array, "max")); //100