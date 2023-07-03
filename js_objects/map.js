const obj = {2:´two´,
             1:´one´,
             4:´four´,
             ´one´:´alsoOne´};


const map = new Map();

map.set(2, ´two´);
map.set(1, ´one´);
map.set(4, ´four´);
map.set(´one´, ´alsoOne´);

map.keys();
// MapIterator : [2, 1, 4, ¨one¨]

map.values();
// MapIterator : [¨two¨, ¨one¨, ¨four¨, ¨alsoOne¨]

