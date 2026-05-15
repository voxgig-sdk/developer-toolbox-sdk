# DeveloperToolbox SDK utility: make_context
require_relative '../core/context'
module DeveloperToolboxUtilities
  MakeContext = ->(ctxmap, basectx) {
    DeveloperToolboxContext.new(ctxmap, basectx)
  }
end
