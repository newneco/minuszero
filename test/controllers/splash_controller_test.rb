require 'test_helper'

class SplashControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get "/"
    assert_response :success
  end

end
