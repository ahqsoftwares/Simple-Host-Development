
         let password = "";
         let chars = [
                  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
                  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                  ["@", "!", "%", "&", ")", "(", ":", ";", "**", "(C)", "(R)", ",", "."]
         ];
         for (i = 0; i < 150; i++) {
                  let part = (Math.round(Math.random() * 2));
                  console.log(part);
                  let num = chars[part][Math.round(Math.random() * chars[part].length)];
                  password += String(num);
         }
         console.log(password);