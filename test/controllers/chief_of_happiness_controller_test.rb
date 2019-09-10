require 'test_helper'

class ChiefOfHappinessControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get chief_of_happiness_index_url
    assert_response :success
  end

end
