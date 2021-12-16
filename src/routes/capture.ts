import * as playwright from 'playwright';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ query }) => {
  const url = new URL(query.get('url'));
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({
    width: +query.get('width'),
    height: +query.get('height')
  });
  await page.goto(url.toString());

  const buffer = await page.screenshot({
    fullPage: query.get('fullscreen') == 'true'
  });

  await browser.close();

  return {
    body: {
      img: buffer.toString('base64')
    }
  };
};
