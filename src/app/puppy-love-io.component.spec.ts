import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PuppyLoveIoAppComponent } from '../app/puppy-love-io.component';

beforeEachProviders(() => [PuppyLoveIoAppComponent]);

describe('App: PuppyLoveIo', () => {
  it('should create the app',
      inject([PuppyLoveIoAppComponent], (app: PuppyLoveIoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'puppy-love-io works!\'',
      inject([PuppyLoveIoAppComponent], (app: PuppyLoveIoAppComponent) => {
    expect(app.title).toEqual('puppy-love-io works!');
  }));
});
