export function EventLoop() {
  console.log(1) 
  // синхронная задача => console.log(1)
  // №1 - 1
  setTimeout(() => console.log(2))  
  // => console.log(2) => event queue => console.log(2) 
  // №5 - 2
  Promise.resolve().then(() => console.log(3)) 
  // Promise.resolve() => fulfilled => .then(() => setTimeout(() => console.log(4))) => microtask queue => console.log(3) 
  // №3 - 3
  Promise.resolve().then(() => setTimeout(() => console.log(4))) 
  // => fulfilled => microtask queue => .then(() => setTimeout(() => console.log(4)))
  // №8 - 4
  setTimeout(() => Promise.resolve().then(() => console.log(8))) 
  // => Promise.resolve().then(() => console.log(8)) => event queue => fulfilled => microtask queue => .then(() => console.log(8))
  // №6 - 8
  Promise.resolve().then(() => console.log(5)) 
  // Promise.resolve() => fulfilled => .then(() => console.log(5)) => microtask queue => console.log(5) 
  // №4 - 5
  setTimeout(() => console.log(6)) 
  // => console.log(6) => event queue => console.log(6)
  // №7 - 6
  console.log(7) 
  // синхронная задача => console.log(7) 
  // №2 - 7
} 
// 1 7 3 5 2 8 6 4 

// Сначала выполняется синхронная задача console.log(1), которая выводит 1 в консоль.

// Затем добавляется асинхронная задача setTimeout(() => console.log(2)) в очередь событий. Она будет ждать своего выполнения, пока не истечет заданный таймер (в данном случае 0 мс).

// Затем создается промис Promise.resolve(), который сразу же переходит в состояние fulfilled (успешно выполнен). Его обработчик .then(() => console.log(3)) добавляется в очередь микрозадач.

//  Затем создается еще один промис Promise.resolve(), который также сразу же переходит в состояние fulfilled. Его обработчик .then(() => setTimeout(() => console.log(4))) добавляется в очередь микрозадач.

//  Затем добавляется еще одна асинхронная задача setTimeout(() => Promise.resolve().then(() => console.log(8))) в очередь событий. Она также будет ждать своего выполнения, пока не истечет заданный таймер (в данном случае 0 мс).

//  Затем создается третий промис Promise.resolve(), который также сразу же переходит в состояние fulfilled. Его обработчик .then(() => console.log(5)) добавляется в очередь микрозадач.

//  Затем добавляется еще одна асинхронная задача setTimeout(() => console.log(6)) в очередь событий. Она также будет ждать своего выполнения, пока не истечет заданный таймер (в данном случае 0 мс).

//  Затем выполняется синхронная задача console.log(7), которая выводит 7 в консоль.

//  После этого, перед тем, как перейти к очереди событий, JavaScript проверяет, есть ли в очереди микрозадач какие-то задачи, которые нужно выполнить. Оказывается, что есть три таких задачи: .then(() => console.log(3)), .then(() => setTimeout(() => console.log(4))) и .then(() => console.log(5)). Они выполняются в том порядке, в котором они были добавлены в очередь микрозадач. То есть, сначала выполняется .then(() => console.log(3)), который выводит 3 в консоль. Затем выполняется .then(() => setTimeout(() => console.log(4))), который добавляет еще одну асинхронную задачу setTimeout(() => console.log(4)) в очередь событий. Затем выполняется .then(() => console.log(5)), который выводит 5 в консоль. Теперь очередь микрозадач пуста, и мы можем перейти к очереди событий.

//  В очереди событий есть три асинхронные задачи: setTimeout(() => console.log(2)), setTimeout(() => Promise.resolve().then(() => console.log(8))) и setTimeout(() => console.log(6)). Они также выполняются в том порядке, в котором они были добавлены в очередь событий. То есть, сначала выполняется setTimeout(() => console.log(2)), который выводит 2 в консоль. Затем выполняется setTimeout(() => Promise.resolve().then(() => console.log(8))), который создает еще один промис Promise.resolve(), который сразу же переходит в состояние fulfilled. Его обработчик .then(() => console.log(8)) добавляется в очередь микрозадач. Затем выполняется setTimeout(() => console.log(6)), который выводит 6 в консоль. Теперь очередь событий пуста, и мы можем снова проверить очередь микрозадач.

//  В очереди микрозадач есть одна задача: .then(() => console.log(8)). Она выполняется и выводит 8 в консоль. Теперь очередь микрозадач пуста, и мы можем закончить выполнение кода.

//  Итоговый вывод в консоль будет таким:

// 1
// 7
// 3
// 5
// 2
// 6
// 8
// 4
