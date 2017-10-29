import { DiagnosticosPage } from './app.po';

describe('diagnosticos App', () => {
  let page: DiagnosticosPage;

  beforeEach(() => {
    page = new DiagnosticosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dg works!');
  });
});
