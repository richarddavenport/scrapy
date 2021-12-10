import { Handler } from "@netlify/functions";
import * as playwright from 'playwright-core';

const handler: Handler = async (event, context) => {
  const query = new URLSearchParams(event.rawQuery);
  const queryUrl = query.get('url');
  const queryFullscreen = query.get('fullscreen');
  const queryWidth = query.get('width');
  const queryHeight = query.get('height');

  const url = new URL(queryUrl);
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: +queryWidth, height: +queryHeight });
  await page.goto(url.toString());

  const buffer = await page.screenshot({
    fullPage: queryFullscreen === 'true'
  });
  await browser.close();

  return {
    statusCode: 200,
    body: JSON.stringify({
      img: buffer.toString('base64')
    })
  };
};

export { handler };
