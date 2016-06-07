 var x = 0;
 var j = 0;
 var delimiter = /(\,+)/
 var oem = " Little bread-and-butterflies kiss the tulips, and the sun is like a toy balloon. There are get up in the morning glories, in the golden afternoon. There are dizzy daffodils on the hillside, strings of violets are all in tune, Tiger lilies love the dandelions, in the golden afternoon, the golden afternoon. There are dog and caterpillars and a copper centipede, where the lazy daisies love the very peaceful life they lead… You can learn a lot of things from the flowers, for especially in the month of June. There’s a wealth of happiness and romance, all in the golden afternoon. … All in the golden afternoon, the golden afternoon…"
 var ezra = " We are no longer just lingering unregenerately in the Cave. We have been compelled out but choose to continue to view the shadows and reflections. With faked, skewed, manipulated images, we view and consume images and media with an awareness that we are not seeing the full truth but just part of it. The images, despite the vast possibilities of disordinate thought allow for people to share ideas and perspectives that face-to-face communication can not. We can not explain an image to the degree at which an image looks, feels, or seems.";
 var ez = " We are no longer just lingering unregenerately in the Cave. We have been compelled out but choose to continue to view the shadows and reflections. With faked, skewed, manipulated images, we view and consume images and media with an awareness that we are not seeing the full truth but just part of it. The images, despite the vast possibilities of disordinate thought allow for people to share ideas and perspectives that face-to-face communication can not. We can not explain an image to the degree at which an image looks, feels, or seems.";
 var eza = "In modern society we are surrounded with computers that grant us access to images that have the intention to claim our attention more than past media. It seems as if this is out of our control. It is my argument that although images mediate and alter what we are looking at, they inherently hold a primary truth that is only accessible through this mediated experience."
 var kae = "¡™£¢∞§¶•ªº–≠£¢∞§¶•ªº"

 function setup() {
   createCanvas(700, 300);
   // frameRate(1)
 }

 function draw() {
   x = x + 1;
   background(50);
   // fill(255,0,0)
   // ellipse(x,20,100,100)
   fill(255)
   var splitString = split(oem, delimiter)
   var poem = splitTokens(ezra, ' ');
   var poem2 = splitTokens(ez, ' ');
   var poem3 = splitTokens(eza, ' ');
   var poem4 = splitTokens(kae, ',');


   textFont('Courier')
   textSize(20);
   fill(255);
   for (i = 0; i < poem.length; i = i + 3) {
     text(poem[i], 00, 20 + i * 3);

   }
   textFont('Serif')
   textSize(170);
   for (i = 0; i < poem4.length; i = i + 3) {
     text(poem4[i], 0, 210);

   }

   // for (i = 0; i < poem.length; i = i + 1) {
   //   text(poem[i], 200, 20 + i * 3);

   // }
   textFont('Courier')

   textSize(24);

   for (i = 0; i < poem.length; i = i + 3) {
     text(poem[i], 340, 40 + i * 3);

   }
   // fill(255,100,0)
   textSize(10);
   for (i = 0; i < poem2.length; i = i + 10) {
     text(poem2[i], 520, 40 + i * 3);

   }
   textFont('Arial')

   textSize(40);
   for (i = 0; i < poem3.length; i = i + 20) {
     text(poem3[i], 660, 25 + i * 10);

   }
   // fill(255,100,0)

   textSize(10);
   for (i = 0; i < poem2.length; i = i + 10) {
     text(poem2[i], 440, 40 + i * 10);
     // text(poem2[i], 440, 40 + i * 10);


   }
   textFont('Arial')

   textSize(20);
   for (i = 0; i < poem2.length; i = i + 7) {
     text(poem2[i], 0, 40 + i * 3);

   }
   textFont('Arial')

   textSize(90);
   for (i = 0; i < poem3.length; i = i + 30) {
     text(poem3[i], 160, 25 + i * 10);

   }

   if (x < 255) {

     // fill(j)
     fill(x * 10)
       // textSize(20);
       // text((splitString[0]), 70, 290)
       //   // text((splitString[1]), 10, 293)
       // text((splitString[2]), 70, 193)
       //   text((splitString[4]), 70, 93)
       //   text((splitString[5]), 70, 10)
       // text((splitString[5]), 10, 500)
       // text((splitString[6]), 10, 550)
       // text((splitString[7]), 10, 600)
       // text((splitString[8]), 10, 450)

     j = j + 1
   } else {
     j = 50
   }
   if (x > 100) {
     x = 0
   }

 }