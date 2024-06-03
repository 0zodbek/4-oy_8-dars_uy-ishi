// 1-masala
// function yigindi1(arg) {
//     let sum = 0 ;
//     for(let i = 0 ; i < arg.length ; i++){
//     sum += arg[i] ;
//     }
//     return sum ;
// }
// console.log(yigindi1([1,2,3,4,5,6]));

// 2-masala
// function maxArg(arg) {
//  let max = 0 ;
//  for(let i = 0 ; i < arg.length ; i++){
//  if(max > arg[i]){
// max = max
// }else{
// max = arg[i]
// }
//  }
//  return max ; 
//  }
// console.log(maxArg([1,2,3,4,5,6,7,8,9]));

// 3-masala
// function minArg(arg) {
//     let min ;
//     for(let i = 0 ; i < arg.length ; i++){
//     if(min < arg[i]){
//    min = min
//    }else{
//    min = arg[i]
//    }
//     }
//     return min ; 
//     }
//    console.log(minArg([9,7,3,6,1,8,4,2]));

// 4-masala
// function manfiy(arg) {
//     let c = -1 ;
//     let f = [,] ;
//     for(let i = 0 ; i < arg.length ; i++){
//     if(arg[i] < 0 ){
//     f.push(arg[i]*c)
//     }
//     }
//     return f ;
// }
// console.log(manfiy([1,-4,3,-8,5,-7]));

// 5-masala
// function arg2x(arg) {
//     let x = 2 ;
//     for (let i = 0 ; i < arg.length ; i++){
//     console.log(arg[i]*x);
//     }
//     return arg2x ;
// }
// console.log(arg2x([1,2,3,4,5]));

// 6-masala
// function juftyoqqil(arg) {
//     let b = [] ; 
//     for(let i = 0 ; i < arg.length ; i++){
//     if(arg[i] % 2 == 1){
//     b.push(arg[i])
//     }
//     }
//     console.log(b);
// }
// console.log(juftyoqqil([1,2,3,4,5,6,7,8,9]));

// 7-masala
// function toqyoqqil(arg) {
//     let b = [] ; 
//     for(let i = 0 ; i < arg.length ; i++){
//     if(arg[i] % 2 == 0){
//     b.push(arg[i])
//     }
//     }
//     console.log(b);
// }
// console.log(toqyoqqil([1,2,3,4,5,6,7,8,9]));

// 8-masala
// function borligit(arg) {
//     let a = 7;
//     for(let i = 0 ; i < arg.length ; i++ ){
//     if(a == arg[i]){
//     console.log('bunday qiymat mavjud');
//     }
//     }
//     return borligit ;
// }
// console.log(borligit([1,2,3,4,5,6,7,8,9,10]));

// // 9-masala
// function teskaritartib(arg) {
//     for(let i = arg.length ; i >= 0 ; i--){
//     console.log(arg[i]);
//     }
// }
// console.log(teskaritartib([1,2,3,4,5,6,7,8,9,10]));

// 10-masala



// 11-masala
// function eplus1(arg) {
//     let a = [] ;
//     for(let i = 0 ; i < arg.length ; i++){
//     a.push(arg[i]+1);
//     }
//     console.log(a);
// }
// console.log(eplus1([1,2,3,4,5,6,7,8,9]));

// 12-masala
// function berElmInd(arg) {
//     let a = 5;
//     for(let i = 0 ; i < arg.length ; i++){
//     if(a === arg[i]){
//     console.log(i);
//     }
//     }
// }
// console.log(berElmInd([1,2,3,4,5,6,7,8,9,10]));

// 13-masala
// function berElmInd(arg) {
//     let a = 5;
//     let counter = 0 ;
//     for(let i = 0 ; i < arg.length ; i++){
//     if(a === arg[i]){
//     counter += 1 ;
//     }
//     }
// console.log(counter);
// }
// console.log(berElmInd([1,5,3,4,5,6,5,8,9,5]));

// 14-masala
// function musbatsonlarmassivi(arg) {
//     let newmassiv = [ ] ;
//     for(let i = 0 ; i < arg.length ; i++){
//     if(arg[i] > 0 ){
//     newmassiv.push(arg[i]);
//     }
//     }
//     console.log(newmassiv);
// }
// console.log(musbatsonlarmassivi([1,-2,3,-4,5,-6,7,-8,9,-10]));

// 15-masala
// function manfiySonlarMassivi(arg) {
//     let newmassiv = [ ] ;
//     for(let i = 0 ; i < arg.length ; i++){
//     if(arg[i] < 0 ){
//     newmassiv.push(arg[i]);
//     }
//     }
//     console.log(newmassiv);
// }
// console.log(manfiySonlarMassivi([1,-2,3,-4,5,-6,7,-8,9,-10]));

// 16-masala
// function satr(arg) {
//     for(let i = 0 ; i < arg.length ; i++ ){
//     console.log(arg[i]);
//     }
// }
// console.log(satr([1,2,3,4,5,6,7,8,9]));

// 17-masala
// function kvadrat(arg) {
//     let a = [] ;
//     for( let i = 0 ; i < arg.length ; i++ ){
//     a.push(arg[i]*arg[i]);
//     }
//     console.log(a);
// }
// console.log(kvadrat([1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99]));

// 18-masala
function a(arg) {
    let b = ['massiv B'] ;
    for(let i = 0 ; i < arg.length ; i++){
    b.push(arg[i]);
    }
    console.log(b);
}
console.log(a([1,2,3,4,5,6,7,8,9]));
