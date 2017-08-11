import { GoFindAppPage } from './app.po';

describe('go-find-app App', () => {
  let page: GoFindAppPage;

  beforeEach(() => {
    page = new GoFindAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
