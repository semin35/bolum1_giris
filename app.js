//alert("dikkat");
// console.log("hello javascript");
// console.log("merhaba");
// console.log("javascript javadan daha eglencelidir");
// console.error("bu bir hatadir!");
// console.warn("bu bir uyaridir!");

//**==========degisken tanimlama */
// var keywordu ile degisken tanimlanabilir.Ancak 
//modern js var keywordunun kullanimi azaldi.
var pi=3.14;
console.log(pi)
console.log(typeof pi);

pi="3";

pi=true;
console.log(pi);
console.log(typeof pi);

isim="Ahmet";
console.log(isim);
console.log(typeof isim);

isim=4;
console.log(isim);
console.log(typeof isim);
//const ve let yeni degisken tanimlama keywrordlari dir
//const:sadece baslangicta deger atilabilir
//sonradan degeri degistirilemez.
const piSayisi=3.14;
console.log(piSayisi);
//**------LET------- */
//egerki degiskenimizin degerinin degismesi gerekiyor ise const
//kullanamayiz.Bunun yerine Let kullanabiliriz
//!let block-scope bir degiskendir.VAR ise global scope bir tanimlamadir.
//! Block scope:sadece tanimli oldugu alanda gecerlidir.

let fiyat;
console.log(fiyat);
fiyat=5.5;
console.log(fiyat);
console.log(typeof fiyat);

let isim1="Mustafa";//cift tirnak
let isim2='Ahmet';//tek tirnak
let isim3=`Alican`;//backtick

console.log(isim1);
console.log(isim2);
console.log(isim3);

const dil=null;
console.log(dil);
console.log(typeof dil);

const sucuk=40;
const sakiz=2;
const kola=5;
let toplamFiyat=sucuk+sakiz+kola;
toplamFiyat++;
toplamFiyat+=50;
console.log(toplamFiyat,kola);//birden fazla degiskenin degerini yazdirmak icin
//virgul kullanilir.
console.log("toplam:",toplamFiyat);

//? "+" operatoru string birlestirme islemi de gerceklestirir.

const ad="Can";
const soyAd="Canan";
console.log(ad+" "+soyAd);

const s1=7,s2="7";
console.log(s1+s2);
//template literal(String Sablonlari,ES6 ile gelmistir.)
const ad1="Mesut";
const yas=55;
console.log("Benim adim "+ad1+" "+"yasim "+yas+" dir.");
console.log(`Benim adim ${ad1} yasim ${yas} dir.`);

const yil = 2021;
const dogumTarihi = 1980;
const yas1= yil - dogumTarihi;
console.log("yas:" + yas1);
console.log("yas: " + (yil - dogumTarihi));

//NAN-->not a number
console.log(`yasim: ${yil-dogumTarihi}`);//template literal ile yazdirma

const taban=2;
const us=8;

const sonuc=taban**us;//?us alma operatoru
console.log(sonuc);


//mod alma
const sayi=123;
const birler=sayi%10;
const onlar=Math.floor(sayi/10)%10;
const yuzler=Math.floor(sayi/100);
console.log("Birler basamagi: "+birler);
console.log("onlar basamagi: "+onlar);
console.log("yuzler basamagi: "+yuzler);



//karsilastirma operatorleri
//3lu karsilastirma operatoru kullanildiginda hem veri tipi 
//hem de icerik kontrolu yapilir

const rakam=100;
const rakam1="100";

console.log(typeof rakam,typeof rakam1);
console.log(rakam==rakam1);//yanlizca iceriklere bakilir
console.log(rakam===rakam1);//herseyi esit mi diye bakar

//Mantiksal operatorler 
const x=true;
const y=true;
const z=undefined
console.log(x&&y&&z);

//TODO -----TERNARY----
const name1=prompt("Adinizi giriniz: ");
const age=Number(prompt("yasinizi giriniz: "));
age>=18 ? console.log(`${name1} ehliyet alabilir`) :console.log(`${name1} ehliyet alamaz`);

const result=age>=18 ? `${name1} ehliyet alabilir`:`${name1} ehliyet alamaz`;
console.log(result);
