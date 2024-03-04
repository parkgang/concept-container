import { chromium, FullConfig } from "@playwright/test";
import { webSiteUrl } from "./constant";
import { user } from "./users";

export default async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(webSiteUrl);

  await page.locator('[placeholder="아이디를 입력하세요\\."]').click();
  await page.locator('[placeholder="아이디를 입력하세요\\."]').fill(user.id);

  await page.locator('[placeholder="비밀번호를 입력하세요\\."]').click();
  await page.locator('[placeholder="비밀번호를 입력하세요\\."]').fill(user.pw);

  await Promise.all([
    page.waitForNavigation(),
    page.locator("#receivemail >> text=로그인").click(),
  ]);

  await page.context().storageState({ path: "storageState.json" });
  await browser.close();
}
