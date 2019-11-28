FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/uploads/message/image/4/スクリーンショット_2019-11-28_17.39.22.png")}
    user
    group
  end
end