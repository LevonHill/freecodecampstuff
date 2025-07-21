//In this lab, you'll build an email masker that will take an email address and obscure it.

//You'll practice string slicing, concatenation, and using functions.In this lab,
//  you will mask the username part of an email address with asterisks. 
// Masking is a term used to hide or replace sensitive information with asterisks or other characters. 
// For example, if the email address was myEmail@email.com, then the masked email address will be m*****l@email.com.
function maskEmail(email) {//parameter
  const atIndex = email.indexOf("@");//set equal to local scope variable that uses, indexOf to locate the division between name and domain.  
  const localPart = email.slice(0, atIndex);//set equal to local scope variable that uses, slice to grab the name.
  const domain = email.slice(atIndex);// grabs the domain.

  if (localPart.length <= 2) {
    // Not enough to mask, return as is
    return email;
  }
  const firstChar = localPart[0];//This grabs the first character of the email’s local part (everything before the @).
  const lastChar = localPart[localPart.length - 1];// his grabs the last character of the local part by subtracting 1 from the length. Why -1? Because strings are zero-indexed.
  const masked = "*".repeat(localPart.length - 2);//We're replacing all the middle characters with asterisks. We subtract 2 from the length to account for: 
  // The first character (which we keep) The last character (which we also keep)
  return firstChar + masked + lastChar + domain;
}


const email = "Levon.Hill@zekelman.com";
const info = "ronalda.brown@zekelman.com"
console.log(maskEmail(email)); // ➜ "a*******e@example.com"
console.log(maskEmail(info));
