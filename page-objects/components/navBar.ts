import { BasePageComponent } from '../basePageComponent';

export default class NavBar extends BasePageComponent {

  readonly homeButton = this.host.locator('[data-test="nav-home"]');
  readonly categoriesButton = this.host.locator('[data-test="nav-categories"]');

}