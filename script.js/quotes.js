//цытаты
const changeQuote = document.querySelector(".change-quote");
const quote = document.querySelector(".quote");
var arrQuote = [
  "«Our  life  is  what  our  thoughts  make  it », M. Aurelius",
  "«Success is not the key to happiness. Happiness is the key to success»",
  "«Learning is a treasure that will follow its owner everywhere» , Chinese Proverb",
  "«We do not remember days, we remember moments» , Cesare Pavese",
  "«Build your own dreams, or someone else will hire you to build theirs» ,Farrah Gray",
  "«If  you  love  something, set  it  free;  if  it  comes  back,  it’s  yours.  If  it  doesn’t  it  never  was» , Richard Bach",
  "«Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself» ,Rumi",
];
changeQuote.addEventListener("click", (e) => {
  const random = Math.floor(Math.random() * arrQuote.length);
  quote.innerHTML = arrQuote[random];
});
