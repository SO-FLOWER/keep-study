export const TimeOut = 5000;

const devBaseURL = "https://httpbin.org";
const proBaseURL = "https://production.org";
console.log(process.env.NODE_ENV);
export const baseURL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;