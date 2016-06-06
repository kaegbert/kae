 var x = 0;
 var j = 0;
 var delimiter = /(\,+)/
 var oem = " Little bread-and-butterflies kiss the tulips, and the sun is like a toy balloon. There are get up in the morning glories, in the golden afternoon. There are dizzy daffodils on the hillside, strings of violets are all in tune, Tiger lilies love the dandelions, in the golden afternoon, the golden afternoon. There are dog and caterpillars and a copper centipede, where the lazy daisies love the very peaceful life they lead… You can learn a lot of things from the flowers, for especially in the month of June. There’s a wealth of happiness and romance, all in the golden afternoon. … All in the golden afternoon, the golden afternoon…"
 var ezra = " We are no longer just lingering unregenerately in the Cave. We have been compelled out but choose to continue to view the shadows and reflections. With faked, skewed, manipulated images, we view and consume images and media with an awareness that we are not seeing the full truth but just part of it. The images, despite the vast possibilities of disordinate thought allow for people to share ideas and perspectives that face-to-face communication can not. We can not explain an image to the degree at which an image looks, feels, or seems.";
 var ez = " We are no longer just lingering unregenerately in the Cave. We have been compelled out but choose to continue to view the shadows and reflections. With faked, skewed, manipulated images, we view and consume images and media with an awareness that we are not seeing the full truth but just part of it. The images, despite the vast possibilities of disordinate thought allow for people to share ideas and perspectives that face-to-face communication can not. We can not explain an image to the degree at which an image looks, feels, or seems.";
 var eza = "In modern society we are surrounded with computers that grant us access to images that have the intention to claim our attention more than past media. It seems as if this is out of our control. It is my argument that although images mediate and alter what we are looking at, they inherently hold a primary truth that is only accessible through this mediated experience."

 function setup() {
   createCanvas(700, 300);
   frameRate(10)
 }

 function draw() {
   var x = x + .01;
   background(50);
   var splitString = split(oem, delimiter)
   var poem = splitTokens(ezra, ' ');
   var poem2 = splitTokens(ez, ' ');
   var poem3 = splitTokens(eza, ' ');

   textFont('Courier')
   textSize(20);
   fill(233);
   for (i = 0; i < poem.length; i = i + 1) {
     text(poem[i], 00, 20 + i * 3);

   }

   // for (i = 0; i < poem.length; i = i + 1) {
   //   text(poem[i], 200, 20 + i * 3);

   // }
   textSize(14);

   for (i = 0; i < poem.length; i = i + 10) {
     text(poem[i], 340, 40 + i * 3);

   }
   // fill(255,100,0)
   textSize(10);
   for (i = 0; i < poem2.length; i = i + 6) {
     text(poem2[i], 520, 40 + i * 23);

   }
   textFont('Arial')

   textSize(40);
   for (i = 0; i < poem3.length; i = i + 2) {
     text(poem3[i], 660, 25 + i * 10);

   }
   // fill(255,100,0)

   textSize(10);
   for (i = 0; i < poem2.length; i = i + 9) {
     text(poem2[i], 440, 40 + i * 10);
     // text(poem2[i], 440, 40 + i * 10);


   }
   textFont('Arial')

   textSize(80);
   for (i = 0; i < poem2.length; i = i + 7) {
     text(poem2[i], 0, 40 + i * 3);

   }

   if (j < 255) {

     // fill(j)
     fill(255)
     textSize(30);
     text((splitString[0]), 10, 290)
       // text((splitString[1]), 10, 293)
     text((splitString[2]), 10, 293)
       // text((splitString[3]), 10, 400)
       // text((splitString[4]), 10, 350)
       // text((splitString[5]), 10, 500)
       // text((splitString[6]), 10, 550)
       // text((splitString[7]), 10, 600)
       // text((splitString[8]), 10, 450)

     //   j = j + 1
     // } else {
     //   j = 50
   }
 }