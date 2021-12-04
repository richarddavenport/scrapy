import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');

export const get = async ({ query }) => {
  const queryUrl = query.get('url');
  const queryFullscreen = query.get('fullscreen');
  const queryWidth = query.get('width');
  const queryHeight = query.get('height');

  const url = new URL(queryUrl);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: +queryWidth, height: +queryHeight });
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
