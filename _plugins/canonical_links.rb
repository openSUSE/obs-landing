# Injects rel="canonical" onto every rendered <a> tag whose href points to
# openbuildservice.org. This runs after Jekyll renders each page, post, and
# document, so it covers links written in Markdown (which Kramdown renders as
# plain <a> tags with no rel attribute) as well as any explicit HTML anchor
# tags that were missed. Tags that already carry a rel attribute are left
# unchanged to avoid duplicate or conflicting values.
Jekyll::Hooks.register [:pages, :posts, :documents], :post_render do |doc|
  doc.output = doc.output.gsub(
    /<a\s([^>]*href=["'][^"']*openbuildservice\.org[^"']*["'][^>]*)>/i
  ) do |match|
    attrs = $1
    if attrs.include?('rel=')
      match
    else
      "<a #{attrs} rel=\"canonical\">"
    end
  end
end
