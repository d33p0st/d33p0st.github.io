# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "tshoqr"
  spec.version       = "0.1.0"
  spec.authors       = ["d33p0st"]
  spec.email         = ["d33p0st@gmail.com"]

  spec.summary       = "Theme for my personal website."
  spec.homepage      = "https://github.com/d33p0st/tshoqr"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end
