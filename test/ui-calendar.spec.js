/* global beforeEach, describe, it, inject, expect, module */
describe('Calendar', function () {
  'use strict';

  var scope, $compile, $locale, $controller;

  beforeEach(module('ui.calendar2'));
  beforeEach(inject(function (_$rootScope_, _$compile_, _$locale_, _$controller_) {
    scope = _$rootScope_.$new();
    $compile = _$compile_;
    $locale = _$locale_;
    $controller = _$controller_;
  }));

  describe('calendar directive', function () {
    it('should have tests', function () {
      // Dummy test. Remove this.
      expect(2 + 2).toBe(4);
    });
  });
});