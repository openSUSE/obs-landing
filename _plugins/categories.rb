# Thanks to http://recursive-design.com/projects/jekyll-plugins/ for the code off which this is based
require_relative 'custom_page'

module Jekyll
  class Category < CustomPage
    def initialize(site, base, dir, category)
      super site, base, dir, 'category'
      self.data['category'] = category
      self.data['title'] = "Category: #{category}"
      self.data['description'] = "Category: #{category}"
    end
  end
  
  class Categories < CustomPage
    def initialize(site, base, dir)
      super site, base, dir, 'categories'
      self.data['categories'] = site.categories.keys.sort
    end
  end
  
  class Site
    # generate_categories is called by the custom process function in site_process.rb
        
    def generate_categories
      throw "No 'category' layout found." unless self.layouts.key? 'category'
      
      # Categories
      dir = self.config['category_dir'] || 'categories'
      write_page Categories.new(self, self.source, dir) if self.layouts.key? 'categories'
      
      self.categories.keys.each do |category|
        write_page Category.new(self, self.source, File.join(dir, category), category)
      end
            
    end
  end
end
