// T A S K  1
console.log('T A S K  1');

let str =  "yo3ur Her1e co4okies 2is";

let sorted = 
str.split(' ')
.sort((a,b) => a.match(/\d+/)[0] -  b.match(/\d+/)[0]) // sort based on first number found
.join(' ');

console.log(sorted);

// T A S K  2
console.log('T A S K  2');

let board = [
    [2, 1, 1],
    [1, 2, 2],
    [1, 2, 1]
];
function isSolved(board) {
    const getWins = makeGetWins(board);
    return getWins(1) ? 1 : getWins(2) ? 2 :  emptySlots(board) ? -1 : 0;
}
  
const makeGetWins = board => key => 
    [
      horizontalWin(board, key),
      verticalWin(board, key),
      leftDiagWin(board, key),
      rightDiagWin(board, key)
    ].some(_=>Boolean(_));
    
const emptySlots = board =>
    board.map(x=>x.some(_=>_===0)).some(_=>Boolean(_));
    
const horizontalWin = (board, key) =>
    board.map(x => x.every(_=>_===key)).some(_=>Boolean(_));
  
const verticalWin = (board, key) =>
    horizontalWin(rotateBoard(board), key);
    
const leftDiagWin = (board, key) =>
    [0,1,2].map((winIdx, rowIdx) => board[rowIdx][winIdx] === key).every(_=>Boolean(_));
  
const rightDiagWin = (board, key) =>
    [2,1,0].map((winIdx, rowIdx) => board[rowIdx][winIdx] === key).every(_=>Boolean(_));
    
const rotateBoard = board => 
    Array(board[0].length)
      .fill(null)
      .map((x,idx) => board.map(_ => _[idx]));

console.log(isSolved(board)); 

// T A S K  3
console.log('T A S K  3');


let meeting = (r,c) =>{
    if(0 == c) return 'Game On';
    let ans = r.map( ([x,y]) => Math.max(...[y - x.length,0]));
    let sum = ans.reduce((a,b) => a+b ,0);
    if( sum < c) {
      return 'Not enough!';
    }else{
     sum = 0
     ret = []
     while(sum < c){
      tmp = ans.shift();
      sum += tmp
      ret.push(tmp)
     }
     ret[ret.length-1] -=  sum - c
     return ret;
    }
}
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));