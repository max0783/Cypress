Feature: Featured Items Carousel

  As a user of DemoBlaze
  I want to interact with the featured items carousel
  So that I can view different featured products easily

  Scenario: Verify carousel loads correctly
    Given I am on the DemoBlaze homepage
    Then I should see a featured items carousel

  Scenario: Ensure carousel navigation buttons work
    Given I am on the DemoBlaze homepage
    When I click on the "next" button in the carousel
    Then the carousel should move to the next item
    When I click on the "previous" button in the carousel
    Then the carousel should move to the previous item

  Scenario: Check if items in the carousel can be clicked and viewed
    Given I am on the DemoBlaze homepage
    When I click on an item in the carousel
    Then I should be redirected to the product detail page for that item
