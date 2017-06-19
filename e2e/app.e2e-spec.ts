import { MazdaAppPage } from './app.po';

describe('mazda-app App', () => {
  let page: MazdaAppPage;

  beforeEach(() => {
    page = new MazdaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
