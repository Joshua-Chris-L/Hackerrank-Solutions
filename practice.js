// const recurrsive = function(number){

//     if(number === 2){
//         return 2
//     }

//     return number*recurrsive(number -1)
// }

// console.log(recurrsive(5))

// calculations = 0;
// function fibonacci(n){
//     let n1 = 0;
//     let n2 = 1;
//     temp;
   
//     for (let i = 0; i <=n; i++) {
//        temp = n2;
       

//     }

//     return n2
// }
// console.log(fibonacci(7))

// function getTotalX(a, b){
//     let result = 0;
//     const maxA = Math.max(...a)
//     const minB = Math.min(...b)

//     for (let i = maxA; i <= minB; i++) {
//         let isFactorMultiple = false;

//         for (const elem of a) {
//             if (i % elem === 0) {
//                 isFactorMultiple = true
//                 break
//             }
//         }

//         for (const elem of b) {
//             if (elem % i === 0) {
//                 isFactorMultiple = true
//                 break
//             }
//         }

//         if (isFactorMultiple = true) {
//             result += 1
//         }       
//     }

//     return result
// }

// console.log(getTotalX([2,6], [24, 36]))

// const minA = [2,5,6,69, 90]

// console.log(Math.min(...minA))


// function getTotalX(a, b){
//     let count = 0;
//     const maxA = Math.max(...a)
//     const minB = Math.min(...b)
    
//     for (let i = maxA; i < minB; i++) {
        
//         if (a.every(num => i % num === 0) && b.every(num => num % i === 0) ) {
//             count++
//         }
        
//     }

//     return count;
// }

// console.log(getTotalX([2,6], [24, 36]))


// function breakingRecords(scores){

//     let highest_score = scores[0]
//     let lowest_score  = scores[0]

//     let highestBreakingPoint = 0
//     let lowestBreakingPoint = 0

//     for (let i = 0; i < scores.length; i++) {

//         if (scores[i] > highest_score) {
//             highest_score = scores[i]
//             highestBreakingPoint += 1
        
//         }else if (scores[i] < lowest_score ){
//             lowest_score = scores[i]
//             lowestBreakingPoint += 1
//         }        
//     }

//     return [highestBreakingPoint, lowestBreakingPoint]
// }

// console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))

// Migratory Birds

// function migratoryBirds(arr){
//     let seenBirds = {}

//     arr.forEach( bird => {
//         if(!seenBirds[bird]){
//             seenBirds[bird] = 1
//         }else{
//             seenBirds[bird]++
//         }
//     });

//    let maxNum = 0;
//    let birdId = 0
//    for (const key in seenBirds) {
//         if (seenBirds[key] > maxNum) {
//             maxNum = seenBirds[key]
//             birdId = key
//         } else if(seenBirds[key] === maxNum){
//             if (birdId > key) {
//                 birdId = key
//             }
//         }
//    }

//    return birdId
// }
// console.log(migratoryBirds([1,1,2,2,3]))

// Drawing Book

// function pageCount(n, p){

//     if(n%2 === 0){
//         if(p === 1 || (p === n)){
//             return 0
//         }else if(p === (n-1)){
//             return 1
//         }
//     }

//     if(p === 1 || (p === n) || (p === (n-1))){
//         return 0
//     }else{
//        const frontCount = Math.trunc(p/2)
//        const backCount = Math.abs(frontCount - Math.trunc(n/2))
       
//        const minimumCount = frontCount < backCount ? frontCount: backCount
       
//        return minimumCount
//     } 
// }

// console.log(pageCount(5,4))
