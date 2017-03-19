import { CeriPage } from './app.po';

describe('ceri App', () => {
  let page: CeriPage;

  beforeEach(() => {
    page = new CeriPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
