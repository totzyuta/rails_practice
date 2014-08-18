class AddLikeCountToCollections < ActiveRecord::Migration
  def change
    add_column :collections, :like_count, :integer, default: 0
  end
end
