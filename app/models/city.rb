class City < ActiveRecord::Base
  validates_presence_of :name, :acronym
  validates_uniqueness_of :name, :acronym

  def self.array
    @array ||= order(:name).pluck(:name, :acronym).push(['other', 'other'])
  end
end
