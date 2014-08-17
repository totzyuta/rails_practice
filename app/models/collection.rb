class Collection < ActiveRecord::Base
	mount_uploader :picture, PictureUploader
end
