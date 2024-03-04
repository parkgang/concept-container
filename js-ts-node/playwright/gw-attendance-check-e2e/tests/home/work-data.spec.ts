import { test, expect, Page, Locator } from "@playwright/test";
import { webSiteUrl } from "../constant";

test.beforeEach(async ({ page }) => {
  await page.goto(webSiteUrl);
});

test.describe("근태체크", () => {
  test("출근체크", async ({ page }) => {
    // TODO: 출근 체크 전 출근시간 필드가 어떻게 나오는지 몰라서 일단 기달리기
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 2000);
    });
    const attendanceButton: Locator = await page.locator(
      "text=/[출근\b퇴근\b]체크/"
    );
    const attendanceButtonInnerText = await attendanceButton.innerText();

    await expect(attendanceButton).not.toBeEmpty();

    test.skip(
      attendanceButtonInnerText === "퇴근체크",
      "이미 출근체크가 되어있습니다"
    );
    await expect(attendanceButton).toHaveText("출근체크");
    await attendanceButton.click();
  });

  test.skip("퇴근체크", async ({ page }) => {
    // NOTE: 퇴근 체크시 레이어 팝업 있음
  });

  test.afterEach(async ({ page }) => {
    await page.locator("div.box.work_data.h450.b999").screenshot({
      // TODO: 하드코딩 함
      path: `test-results/attendance.png`,
    });
  });
});
