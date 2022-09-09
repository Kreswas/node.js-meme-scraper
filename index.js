import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

//jquery.
// const url = "https://memegen-link-examples-upleveled.netlify.app";

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app',
);
const img = await response.text();

const image = cheerio.load(img);

// console.log(image);
// const urlArray = [];
const src = image('img').attr('src');
console.log(src);
