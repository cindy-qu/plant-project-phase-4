class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :reviews
  has_many :plant_posts
  # has_many :reviews

  def reviews
    self.object.reviews.map do |rev|
      {review: rev, plant_post: {image: rev.plant_post.image, user_id: rev.plant_post.user_id, plant_name: rev.plant_post.plant_name}}
    end
  end
  
end
