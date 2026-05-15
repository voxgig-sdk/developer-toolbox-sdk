# DeveloperToolbox SDK utility: feature_add
module DeveloperToolboxUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
