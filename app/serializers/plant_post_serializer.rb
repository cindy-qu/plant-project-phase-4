class PlantPostSerializer < ActiveModel::Serializer
  attributes :id, :image, :plant_name, :indoor, :state, :pet_safe
  has_one :user
  has_many :reviews
end
