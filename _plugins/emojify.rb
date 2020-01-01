require 'gemoji'

module Jekyll
  module EmojifyFilter
    def emojify(input)
      input.to_str.gsub(/:([\w+-]+):/) do |match|
        if emoji = ::Emoji.find_by_alias($1)
          emoji.raw unless emoji.custom?
        else
          match
        end
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::EmojifyFilter)
