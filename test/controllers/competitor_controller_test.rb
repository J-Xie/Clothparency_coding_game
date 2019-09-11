require 'test_helper'

class CompetitorControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get competitor_index_url
    assert_response :success
  end

  test "should get create" do
    get competitor_create_url
    assert_response :success
  end

end
