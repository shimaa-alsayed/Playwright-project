function getEnv () {
const env = process.env.ENV!;
if (env == 'staging') {
 console.log("Runing tests on staging environment")
}
else if (env == 'test') {
 console.log("Runing tests on test environment")
}

}

export default getEnv;
