module TwitterHelper
  def self.get_client
    Twitter::REST::Client.new do |config|
      config.consumer_key = 'zgdBOR2wJ2sXKqPvNYjT0Wlzy'
      config.consumer_secret = 'NMgKsVMdlG3IdG6cTzK81uvp9EmTJ0loxFQcvMQWMtxEqK8dUk'
    end
  end

  def get_client
    TwitterHelper.client
  end
end
