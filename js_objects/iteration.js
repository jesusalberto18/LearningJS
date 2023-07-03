const obj = {2:´two´,
             1:´one´,
             4:´four´,
             ´one´:´alsoOne´};

Object.keys(obj);
// [¨1¨, ¨2¨, ¨4¨, ¨one¨]

Object.values(obj);
// [¨one¨, ¨two¨, ¨four¨, ¨alsoOne¨]

Object.entries(obj);
/*
              [
               [2, ´two´,
                1, ´one´,
                4, ´four´,
                ´one´, ´alsoOne´]
              ]
*/
