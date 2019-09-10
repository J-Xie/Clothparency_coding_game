require 'test_helper'

class LinguiniControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get linguini_index_url
    assert_response :success
  end

end
