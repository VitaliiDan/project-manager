export const validateOrgName = (orgName) => {
    const tempArray = orgName.split(' ')
    return tempArray.length >= 15 ? tempArray.slice(0, 15).join(' ') : tempArray.join(' ')
}