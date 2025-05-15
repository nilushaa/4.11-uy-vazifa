
// const users = [
//     {
//       id: "001",
//       role: "user",
//       profile: {
//         name: "Ahror X.",
//         email: "ahrorx@site.com",
//         age: 26,
//         subscription: "premium",
//       },
//       permissions: {
//         readAccess: true,
//         writeAccess: false,
//         deleteAccess: false,
//       },
//       activity: [
//         { action: "login", time: "2025-05-12T09:00:00Z" },
//         { action: "view_course", detail: "React Basics" },
//       ],
//       settings: {
//         theme: "dark",
//         language: "uz",
//         notifications: { email: true, sms: false },
//       },
//     },
//     {
//       id: "002",
//       role: "admin",
//       profile: {
//         name: "Ziyoda R.",
//         email: "ziyoda.admin@site.com",
//         age: 32,
//         subscription: "admin",
//       },
//       permissions: {
//         readAccess: true,
//         writeAccess: true,
//         deleteAccess: true,
//       },
//       activity: [
//         { action: "login", time: "2025-05-12T07:00:00Z" },
//         { action: "delete_user", detail: "User ID 009" },
//       ],
//       settings: {
//         theme: "light",
//         language: "en",
//         notifications: { email: true, sms: true },
//       },
//     },
//     {
//       id: "003",
//       role: "user",
//       profile: {
//         name: "Madina N.",
//         email: "madina.n@site.com",
//         age: 24,
//         subscription: "free",
//       },
//       permissions: {
//         readAccess: true,
//         writeAccess: false,
//         deleteAccess: false,
//       },
//       activity: [
//         { action: "signup", time: "2025-04-01T12:00:00Z" },
//         { action: "comment", detail: "Loved the course!" },
//       ],
//       settings: {
//         theme: "dracula",
//         language: "ru",
//         notifications: { email: false, sms: false },
//       },
//     },
//     {
//       id: "004",
//       role: "admin",
//       profile: {
//         name: "Dilshod K.",
//         email: "dilshod.k@site.com",
//         age: 35,
//         subscription: "admin",
//       },
//       permissions: {
//         readAccess: true,
//         writeAccess: true,
//         deleteAccess: true,
//       },
//       activity: [
//         { action: "ban_user", detail: "User ID 005" },
//         { action: "update_settings", time: "2025-05-10T11:11:11Z" },
//       ],
//       settings: {
//         theme: "light",
//         language: "uz",
//         notifications: { email: true, sms: true },
//       },
//     },
//     {
//       id: "005",
//       role: "user",
//       profile: {
//         name: "Ulug'bek T.",
//         email: "ulugbek.t@site.com",
//         age: 29,
//         subscription: "gold",
//       },
//       permissions: {
//         readAccess: true,
//         writeAccess: true,
//         deleteAccess: false,
//       },
//       activity: [
//         { action: "like_post", detail: "Post ID 112" },
//         { action: "update_profile", time: "2025-05-11T10:00:00Z" },
//       ],
//       settings: {
//         theme: "dark",
//         language: "en",
//         notifications: { email: true, sms: false },
//       },
//     },
//     {
//       id: "006",
//       role: "admin",
//       profile: {
//         name: "Aziz R.",
//         email: "aziz.r@site.com",
//         age: 38,
//         subscription: "admin",
//       },
//       permissions: {
//         readAccess: true,
//         writeAccess: true,
//         deleteAccess: true,
//       },
//       activity: [
//         { action: "login", time: "2025-05-10T08:22:00Z" },
//         { action: "edit_post", detail: "Post ID 456" },
//       ],
//       settings: {
//         theme: "dark",
//         language: "ru",
//         notifications: { email: true, sms: true },
//       },
//     },
//     {
//       id: "007",
//       role: "user",
//       profile: {
//         name: "Sevinch Y.",
//         email: "sevinch.y@site.com",
//         age: 27,
//         subscription: "silver",
//       },
//       permissions: {
//         readAccess: true,
//         writeAccess: false,
//         deleteAccess: false,
//       },
//       activity: [{ action: "feedback", detail: "Great interface!" }],
//       settings: {
//         theme: "light",
//         language: "uz",
//         notifications: { email: false, sms: false },
//       },
//     },
//     {
//       id: "008",
//       role: "admin",
//       profile: {
//         name: "Javlon B.",
//         email: "javlon.b@site.com",
//         age: 40,
//         subscription: "admin",
//       },
//       permissions: {
//         readAccess: true,
//         writeAccess: true,
//         deleteAccess: true,
//       },
//       activity: [{ action: "created_post", detail: "News Update" }],
//       settings: {
//         theme: "light",
//         language: "en",
//         notifications: { email: true, sms: true },
//       },
//     },
//     {
//       id: "009",
//       role: "user",
//     profile: {
//       name: "Kamola S.",
//       email: "kamola.s@site.com",
//       age: 23,
//       subscription: "basic",
//     },
//     permissions: {
//       readAccess: true,
//       writeAccess: false,
//       deleteAccess: false,
//     },
//     activity: [{ action: "joined_group", detail: "Frontend Club" }],
//     settings: {
//       theme: "dark",
//       language: "en",
//       notifications: { email: true, sms: false },
//     },
//   },
//   {
//     id: "010",
//     role: "admin",
//     profile: {
//       name: "Shaxzod M.",
//       email: "shaxzod.m@site.com",
//       age: 33,
//       subscription: "admin",
//     },
//     permissions: {
//       readAccess: true,
//       writeAccess: true,
//       deleteAccess: true,
//     },
//     activity: [{ action: "reset_password", detail: "User ID 003" }],
//     settings: {
//       theme: "dracula",
//       language: "uz",
//       notifications: { email: true, sms: true },
//     },
//   },
// ];

/*1.users arrayidagi barcha foydalanuvchilar orasidan, hech bo‘lmaganda bittasi darkModeni yoqqanmi yoki yo‘qmi — shuni aniqlang. (some)*/

// const darkModen = users.some((user) => {
//   return user.settings.theme.includes("dark");
// });

// console.log(darkModen);

/*2.Barcha foydalanuvchilarning to‘liq ism va emaildan iborat yangi array yarating (profile.firstName + " " + profile.email). (map) */
// const nameAndEmail = users.map(
//   (user) => ${user.profile.name} ${user.profile.email}
// );
// console.log(nameAndEmail);

/*3.Foydalanuvchilar orasida, emailNotifications o‘chirilgan, lekin smsNotifications yoqilganlarni ajratib oling. (filter) */

// const ntfSmsAndEmail = users.filter((user) => {
//   return (
//     user.settings.notifications.email === false &&
//     user.settings.notifications.sms !== false
//   );
// });
// console.log(ntfSmsAndEmail);

/*4.Barcha foydalanuvchilarning subscription qiymatiga qarab ularning obuna turlarini konsolga chiqarib chiqing (takrorlanmas holda). (forEach) */

// let subscriptions = [];

// users.forEach((user) => {
//   if (!subscriptions.includes(user.profile.subscription)) {
//     subscriptions.push(user.profile.subscription);
//   }
// });

// subscriptions.forEach((s) => console.log(s));

/*5.Foydalanuvchilarning barcha name (profil nomlarini) kichik harflarda va faqat ism qismini ajratib, yangi arrayga yig‘ing.
 Misol: "Ahror X." → "ahror" */

//  const names=users.map((user)=>{
//     return user.profile.name.split(" ")[0].toLowerCase()
//  })

//  console.log(names)

/*6. Foydalanuvchilar orasidan faqatgina smsNotifications yoqilganlarini ajratib oling.*/

// const smsNotifications = users.filter((user) => {
//   return user.settings.notifications.sms == true;
// });
// console.log(smsNotifications);

/*7.Foydalanuvchilarning har birining email manzilini konsolga chiqarib chiqing.*/

//  const localEmail=users.map((user)=>{
//     return user.profile.email
//  })
//  console.log(localEmail)

/*8.Foydalanuvchilar orasidan birinchi bo‘lib action maydonida "login" qilgan foydalanuvchini toping. */

// const firstLogin = users.find((user) => {
//   return user.activity.some((act) => {
//     return act.action.includes("login");
//   });
// });

// console.log(firstLogin);

/*9.Har bir foydalanuvchi uchun yangi obyekt yarating: name, subscription, va language qiymatlari ajratilgan bo‘lsin. */

// const newObj = users.map((user) => {
//   return {
//     name: user.profile.name,
//     subscription: user.profile.subscription,
//     language: user.settings.language,
//   };
// });

// console.log(newObj);

/*10.Faqat user rolli foydalanuvchilardan iborat yangi array yarating, ularning faqat name va theme ma’lumotlarini saqlang. */

// const nameAndTheme = users
//   .filter((user) => {
//     return user.role == "user";
//   })
//   .map((user) => {
//     return {
//       role: user.role,
//       name: user.profile.name,
//       theme: user.settings.theme,
//     };
//   });

// console.log(nameAndTheme);

/*11.Har bir foydalanuvchining activity arrayida "delete_user" harakati bor-yo‘qligini tekshiring.*/

// users.forEach(user => {
//     const hasDelete = user.activity.some(act => act.action === "delete_user");
//     console.log(${user.profile.name}: ${hasDelete});
//   });

/*12. Foydalanuvchilar orasidan subscription qiymati free, basic yoki silver bo‘lganlarni ajratib oling.*/
// let subscr="basic"

// const subscription = users.filter((user) => {
//   return user.profile.subscription == subscr;
// });
// console.log(subscription);

/*13.Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiyasini tuzing. (map, filter)


5 baho - (85 - 100)


4 baho - (70 - 85)


3 baho - (60 - 70)
 
//13 masalaga tushunmadim

/*14.Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil qiling. (map)


Input: [1, 2, 3, 4, 5] → Output: [1, 4, 9, 16, 25] */

// let arr = [1, 2, 3, 4, 5];
// const square = arr.map((number) => number * number);

// console.log(square)

/*15.Massivdagi musbat sonlar yig’indisini hisoblang. (forEach)


Input: [1, -4, 12, 0, -3, 29, -150] → Output: 42
 */

// let arr=[1, -4, 12, 0, -3, 29, -150]

// let sum=0

// arr.forEach((number)=>{
//   if(number>0){
//     sum+=number
//   }
// })
// console.log(sum)

/*16. Satrdagi so‘zlarning bosh harflarini oling. (split, map, join)


Input: 'George Raymond Richard Martin' → Output: 'GRRM'*/

// let sentence = "George Raymond Richard Martin";

// const result = sentence
//   .split(" ")
//   .map((word) => word.charAt(0))
//   .join("");

// console.log(result);

/*17.Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort) */

/*18.N ta elementdan iborat massiv berilgan. Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter) */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenNumbers = arr.filter((num) => num % 2 === 0);
// let oddNumbers = arr.filter((num) => num % 2 !== 0);

// console.log(Juftlar : ${evenNumbers} | Toqlar : ${oddNumbers});

/*19.N ta elementdan iborat massiv berilgan. Massiv elementlari orasidan bir xil qiymatga ega bo’lganlarini o’chiruvchi dastur tuzilsin. Faqat birinchi uchragani qoldirilsin. (filter yoki Set)
 */

// let arr = [1, 2, 3, 2, 4, 1, 5, 3, 6];

// let unique = arr.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });

// console.log(unique);
/*20. Products massivini id, name, price, rating va discount bo'yicha sortlash.*/

// const products = [
//   { id: 1, name: "shorts", price: 150_000, rating: 4.0, discount: 10 },
//   { id: 3, name: "skirt", price: 200_000, rating: 4.8, discount: 5 },
//   { id: 4, name: "shirt", price: 180_000, rating: 4.5, discount: 15 },
//   { id: 2, name: "coat", price: 1_150_000, rating: 5.0, discount: 20 },
// ];

// let id = products.sort((a, b) => a.id - b.id);

// console.log(id);

// let name=products.sort((a,b)=>a.name.localeCompare(b.name))

// console.log(name)

// let price=products.sort((a,b)=>a.price-b.price)

// console.log(price)

// let rating=products.sort((a,b)=>a.rating-b.rating)
// console.log(rating)

// let discount = products.sort((a, b) => a.discount - b.discount);
// console.log(discount)

/*21.Rating bo'yicha eng kuchli product topilsin. */
// const products = [
//     { id: 1, name: "shorts", price: 150000, rating: 4.0, discount: 10 },
//     { id: 3, name: "skirt", price: 200000, rating: 4.8, discount: 5 },
//     { id: 4, name: "shirt", price: 180000, rating: 4.5, discount: 15 },
//     { id: 2, name: "coat", price: 1150000, rating: 5.0, discount: 10 },
//   ];
  
//   products.sort((a, b) => b.rating - a.rating);
  
//   const topProduct = products[0];
  
//   console.log(topProduct);
