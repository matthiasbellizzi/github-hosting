import { TemplateRef, ViewContainerRef } from '@angular/core';
import { HideForRolesDirective } from './hide-for-roles.directive';

describe('HideForRolesDirective', () => {
  it('should create an instance', () => {
    const directive = new HideForRolesDirective(ViewContainerRef,TemplateRef)
    expect(directive).toBeTruthy();
  });
});
