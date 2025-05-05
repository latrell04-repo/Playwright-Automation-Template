import { type Page } from "@playwright/test";
import NavBar from './components/navBar'

export abstract class BasePage {

    // Locators
    readonly page: Page
    public navBar: NavBar

    //Initialize Locators
    constructor(page: Page) { 
        this.page = page;
        this.navBar = new NavBar(this.page.getByRole('navigation').filter({ hasText: 'Home Categories Hand' }).first())
    };

}