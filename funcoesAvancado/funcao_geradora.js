function* geradora(){   //O * depois do function informa que é uma função geradora.
    yield 'oi mundo!';
}

const g1  = geradora();
console.log(g1.next());