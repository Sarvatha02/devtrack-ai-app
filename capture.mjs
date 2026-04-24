import puppeteer from 'puppeteer';

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: "new"
  });
  const page = await browser.newPage();
  
  console.log('Navigating to https://devtrackai.vercel.app/ ...');
  await page.goto('https://devtrackai.vercel.app/', { waitUntil: 'networkidle0' });
  
  console.log('Setting desktop viewport...');
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Waiting for animations...');
  await new Promise(r => setTimeout(r, 4000));

  console.log('Capturing Desktop Hero...');
  await page.screenshot({ path: 'src/assets/images/desktop_hero.png' });

  console.log('Capturing Desktop Features...');
  await page.evaluate(() => {
    const el = document.getElementById('features');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: 'src/assets/images/desktop_features.png' });

  console.log('Capturing Desktop Pricing...');
  await page.evaluate(() => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: 'src/assets/images/desktop_pricing.png' });

  console.log('Capturing Mobile View...');
  await page.setViewport({ width: 375, height: 812, isMobile: true });
  await page.evaluate(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: 'src/assets/images/mobile_view.png' });

  await browser.close();
  console.log('Screenshots captured successfully!');
})().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
