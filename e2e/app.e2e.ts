import { PuppyLoveIoPage } from './app.po';

describe('puppy-love-io App', function() {
  let page: PuppyLoveIoPage;

  beforeEach(() => {
    page = new PuppyLoveIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('puppy-love-io works!');
  });
});
