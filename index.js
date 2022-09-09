import * as fs from 'node:fs';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

const dir = './memes';
fs.mkdir(dir, (err) => {
  if (dir) return;
  if (err) {
    throw err;
  }
  console.log('directory created');
});

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();
const $ = cheerio.load(body);

const div = $('section > div');
// receive all parents of images
const src = [];
div.each(function () {
  // add this value to the array
  src.push($(this).find('img').attr('src'));
});

const slice = src.slice(0, 10);

// let buffers = [];

for (let i = 0; i < slice.length; i++) {
  const imageData = await fetch(slice[i]);

  const arrayBuffer = await imageData.arrayBuffer();

  const buffer = Buffer.from(arrayBuffer);
  fs.writeFile(`./memes/0${i + 1}.jpg`, buffer, function () {});
}
