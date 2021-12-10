import * as puppeteer from 'puppeteer';

export const get = async ({query}) => {
  const queryUrl = query.get('url');
  const queryFullscreen = query.get('fullscreen');
  const queryWidth = query.get('width');
  const queryHeight = query.get('height');

  const url = new URL(queryUrl);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: +queryWidth, height: +queryHeight });
  await page.goto(url.toString());

  const buffer = await page.screenshot({
    fullPage: queryFullscreen === 'true'
  });
  await browser.close();

  return {
    body: {
      img: buffer.toString('base64')
    }
  };
};