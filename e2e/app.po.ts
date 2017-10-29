import { browser, element, by } from 'protractor';

export class DiagnosticosPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dg-root h1')).getText();
  }
}
