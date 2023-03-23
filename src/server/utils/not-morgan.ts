// import { RequestHandler } from "express";
// import onFinished from "on-finished";
// import chalk from "chalk";

// export const not_morgan: RequestHandler = (req, res, next) => {
//   const url = req.originalUrl;
//   const method = req.method.toUpperCase();

//   const start = Date.now();

//   onFinished(res, (err, response) => {
//     const end = Date.now();
//     const time = end - start;

//     const styledTime = time >= 250 ? chalk.red.bold(`(${time}ms)`) : chalk.green(`(${time}ms)`);

//     if (response.statusCode < 400) {
//       console.log(chalk.black.bgGreenBright(`\n${method} ${url}\t${response.statusCode}`) + " " + styledTime);
//     } else {
//       console.log(chalk.black.bgRedBright(`\n${method} ${url}\t${response.statusCode}`) + " " + styledTime);
//     }
//   });
// };
// export default not_morgan;
