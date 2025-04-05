import { BasePage } from "../basePage";

export default class HomePage extends BasePage {
    
  async open() {
    await super.open("/");
  }
}