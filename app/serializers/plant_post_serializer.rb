class PlantPostSerializer < ActiveModel::Serializer
  attributes :id, :image, :plant_name, :indoor, :state, :pet_safe, :reviews
  has_one :user

  def reviews
    self.object.reviews.map do |rev|
      {review: rev, user: {username: rev.user.username}}
    end
  end
end
