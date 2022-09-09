import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app',
);
const img = await response.text();
