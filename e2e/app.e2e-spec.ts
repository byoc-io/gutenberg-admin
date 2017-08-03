import { GutenbergAdminPage } from './app.po';

describe('gutenberg-admin App', () => {
  let page: GutenbergAdminPage;

  beforeEach(() => {
    page = new GutenbergAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
