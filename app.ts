//Q:15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to 
// send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating 
// the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person
//  you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.


let guest_list: string [] = ["salman", "ahmed","saeed",];

for (let a = 0; a < guest_list.length; a++){
    console.log(`Dear ${guest_list[a]} : \n you are invite to dinner! \n`);

};
console.log (`"Unfortunaytely ${guest_list[0]}, can't come to dinner "`);

guest_list [0] = "sohail";

console.log("\n NEW LIST OF INVITATION : \n")

for (let b = 0; b < guest_list.length; b++){
    console.log(`Dear ${guest_list[b]} : \n you are invite to dinner! \n`);
}



