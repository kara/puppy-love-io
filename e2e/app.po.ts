export class PuppyLoveIoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('puppy-love-io-app h1')).getText();
  }
}
