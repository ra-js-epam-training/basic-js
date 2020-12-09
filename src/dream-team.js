const CustomError = require("../extensions/custom-error");

/*
* function returns name of a newly made team (string)
* based on the names of its members (Array).
*
* Names of the members should be strings.
* Values with other type should be ignored.
* In case of wrong members type function must return false.
*/
module.exports = function createDreamTeam(members) {
  // if there is a wrong input type or it's an empty array - return false
  if (!Array.isArray(members) || members.length == 0) {
    return false;
  }
  // to clean up input args and cast all names to uppercase
  let membersPure = members
    .filter(item => typeof item === 'string')
    .map(item => item.trim().toUpperCase());
  // to get first letters for all the items
  return membersPure.map(item => item[0]).sort().join('');
};

