const os =require ('os');

//get os information

const osName = os.platform();
const osRelease = os.release();

//print os information to the console

console.log('OS Name:', osName);
console.log('OS Release Version::', osRelease);