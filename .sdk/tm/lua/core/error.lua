-- DeveloperToolbox SDK error

local DeveloperToolboxError = {}
DeveloperToolboxError.__index = DeveloperToolboxError


function DeveloperToolboxError.new(code, msg, ctx)
  local self = setmetatable({}, DeveloperToolboxError)
  self.is_sdk_error = true
  self.sdk = "DeveloperToolbox"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function DeveloperToolboxError:error()
  return self.msg
end


function DeveloperToolboxError:__tostring()
  return self.msg
end


return DeveloperToolboxError
