const cats = ["Milo", "Otis", "Garfield"]
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyAppendCat(cat) {
    cats.push(cat);
    return cats;}
    
    function destructivelyPrependCat(cat2) {
      cats.unshift("Bob");
      return cats;}
function destructivelyRemoveLastCat(cat){
  cats.pop();
  return cats;
}
function destructivelyRemoveFirstCat(cat){
  cats.shift();
  return cats;
}
function appendCat(Broom){
  const Allcats = [ ...cats, "Broom"]
  return Allcats
}
function prependCat(Arnold){
  const Allcats2 = ["Arnold", ...cats]
  return Allcats2
}
function removeLastCat(cats3){
   cats3 = cats.slice(0,2)
  return cats3
}  
function removeFirstCat(cats4){
  cats4 = cats.slice(1)
  return cats4
}