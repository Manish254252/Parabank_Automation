import { AfterAll, BeforeAll, setDefaultTimeout } from '@cucumber/cucumber';
import { initBrowser, tearDown } from './test-base';

setDefaultTimeout(60_000);

BeforeAll({ timeout: 60_000 }, async function () {
  await initBrowser();
});

AfterAll({ timeout: 60_000 }, async function () {
  await tearDown();
});
