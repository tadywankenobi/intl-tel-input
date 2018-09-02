"use strict";

describe("destroy: init plugin to test public method destroy", function() {

  beforeEach(function() {
    intlSetup();
    input = $("<input>").wrap("div");
    input.intlTelInput();
  });

  afterEach(function() {
    intlTeardown();
    input = null;
  });

  it("adds the markup", function() {
    expect(getParentElement()).toHaveClass("intl-tel-input");
    expect(getSelectedFlagContainer()).toExist();
    expect(getListElement()).toExist();
  });

  // this is currently impossible in pure JS, until getEventListeners becomes standard
  // it("binds the event listeners", function() {
  //   var listeners = getEventListeners(input[0]);
  //   expect("cut" in listeners).toBeTruthy();
  //   expect("paste" in listeners).toBeTruthy();
  //   expect("keyup" in listeners).toBeTruthy();
  // });


  describe("calling destroy", function() {

    beforeEach(function() {
      input.intlTelInput("destroy");
    });

    it("removes the markup", function() {
      expect(getParentElement()).not.toHaveClass("intl-tel-input");
      expect(getSelectedFlagContainer()).not.toExist();
      expect(getListElement()).not.toExist();
    });

    // this is currently impossible in pure JS, until getEventListeners becomes standard
    // it("unbinds the event listeners", function() {
    //   var listeners = getEventListeners(input[0]);
    //   expect(listeners).toBeUndefined();
    // });

  });

});




describe("destroy: init plugin with nationalMode=false and autoHideDialCode=true", function() {

  beforeEach(function() {
    intlSetup();
    input = $("<input>").wrap("div");
    input.intlTelInput({
      nationalMode: false,
      autoHideDialCode: true
    });
  });

  afterEach(function() {
    intlTeardown();
    input = null;
  });

  // this is currently impossible in pure JS, until getEventListeners becomes standard
  // it("binds the events listeners", function() {
  //   var listeners = getEventListeners(input[0]);
  //   expect("blur" in listeners).toBeTruthy();
  //   expect("focus" in listeners).toBeTruthy();
  //   expect("mousedown" in listeners).toBeTruthy();
  // });


  describe("calling destroy", function() {

    beforeEach(function() {
      input.intlTelInput("destroy");
    });

    // this is currently impossible in pure JS, until getEventListeners becomes standard
    // it("unbinds the event listeners", function() {
    //   var listeners = getEventListeners(input[0]);
    //   expect(listeners).toBeUndefined();
    // });

  });

});
