from pathlib import Path

from playwright.sync_api import sync_playwright


BASE_URL = "http://127.0.0.1:4321"
ARTIFACTS = Path("artifacts")
ARTIFACTS.mkdir(exist_ok=True)


def check_page(page, path: str, expected_lang: str) -> None:
    response = page.goto(f"{BASE_URL}{path}", wait_until="networkidle")
    assert response is not None and response.ok, f"{path}: HTTP failure"
    assert page.locator("html").get_attribute("lang") == expected_lang, f"{path}: incorrect language"
    assert page.title(), f"{path}: empty title"
    assert page.locator('link[rel="canonical"]').count() == 1, f"{path}: canonical missing"
    assert page.locator("h1").count() == 1, f"{path}: expected one h1"
    assert page.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth"), f"{path}: horizontal overflow"
    assert page.evaluate("[...document.images].every((image) => image.complete && image.naturalWidth > 0)"), f"{path}: broken image"


with sync_playwright() as playwright:
    browser = playwright.chromium.launch(channel="chrome", headless=True)
    context = browser.new_context(viewport={"width": 1440, "height": 1000}, device_scale_factor=1)
    page = context.new_page()
    console_errors: list[str] = []
    page.on("console", lambda message: console_errors.append(message.text) if message.type == "error" else None)
    page.on("pageerror", lambda error: console_errors.append(str(error)))

    desktop_routes = [
        ("/", "zh-CN"),
        ("/en/", "en"),
        ("/about/", "zh-CN"),
        ("/research/", "zh-CN"),
        ("/publications/", "zh-CN"),
        ("/projects/", "zh-CN"),
        ("/honors/", "zh-CN"),
        ("/service/", "zh-CN"),
        ("/contact/", "zh-CN"),
        ("/en/projects/", "en"),
        ("/projects/insight/", "zh-CN"),
        ("/en/projects/krail/", "en"),
    ]
    for route, language in desktop_routes:
        check_page(page, route, language)

    page.goto(f"{BASE_URL}/", wait_until="networkidle")
    page.screenshot(path=str(ARTIFACTS / "home-desktop.png"), full_page=True)
    language_link = page.locator("[data-language-choice]")
    assert language_link.get_attribute("href") == "/en/", "home language switch is incorrect"
    initial_theme = page.locator("html").get_attribute("data-theme")
    page.locator("[data-theme-button]").click()
    assert page.locator("html").get_attribute("data-theme") != initial_theme, "theme toggle failed"

    page.goto(f"{BASE_URL}/projects/", wait_until="networkidle")
    page.screenshot(path=str(ARTIFACTS / "projects-desktop.png"), full_page=True)
    status_filter = page.locator('select[data-filter-field="status"]')
    status_filter.select_option("Archived demo")
    visible_projects = page.locator("[data-filter-item]:visible").count()
    assert visible_projects == 2, f"project filter expected 2 archived demos, found {visible_projects}"

    page.goto(f"{BASE_URL}/publications/?lang=en", wait_until="networkidle")
    assert page.url == f"{BASE_URL}/en/publications/", "legacy language query did not redirect"

    context.close()

    mobile_context = browser.new_context(viewport={"width": 320, "height": 800}, device_scale_factor=1)
    mobile = mobile_context.new_page()
    mobile_errors: list[str] = []
    mobile.on("console", lambda message: mobile_errors.append(message.text) if message.type == "error" else None)
    mobile.on("pageerror", lambda error: mobile_errors.append(str(error)))

    for route, language in [("/", "zh-CN"), ("/en/", "en"), ("/projects/", "zh-CN"), ("/contact/", "zh-CN")]:
        check_page(mobile, route, language)

    mobile.goto(f"{BASE_URL}/", wait_until="networkidle")
    mobile.locator("[data-menu-button]").click()
    assert mobile.locator("[data-navigation]").get_attribute("data-open") is not None, "mobile menu did not open"
    assert mobile.locator("[data-navigation]").is_visible(), "mobile navigation is not visible"
    mobile.screenshot(path=str(ARTIFACTS / "home-mobile.png"), full_page=True)

    unnamed_buttons = mobile.locator("button").evaluate_all(
        "buttons => buttons.filter(button => !(button.innerText.trim() || button.getAttribute('aria-label'))).length"
    )
    assert unnamed_buttons == 0, f"found {unnamed_buttons} unnamed buttons"

    assert not console_errors, f"desktop console errors: {console_errors}"
    assert not mobile_errors, f"mobile console errors: {mobile_errors}"
    mobile_context.close()
    browser.close()

print("Visual QA passed: desktop/mobile routes, responsive overflow, images, menu, theme, filter, legacy language redirect, and console logs.")

