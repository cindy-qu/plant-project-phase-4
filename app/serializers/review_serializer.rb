class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id
  has_one :user
  has_one :plant_post
end
