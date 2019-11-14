import createError from 'http-errors'
export const INVALID_EMAIL_OR_PASSWORD_ERROR = createError(createError(400, 'Invalid email or password'))
export const TOKEN_IS_MISSING_ERROR = createError(401, 'Auth token is not supplied')
export const UNVALID_TOKEN_ERROR = createError(401, 'Token is unvalid')
export const MEMBER_ID_NOT_FOUND = createError(400, 'Member Id not found')
export const SELECTION_OPTIONS_MISSING = createError(400, 'selection options are missing')
export const UNVALID_SELECTION_OPTIONS = createError(400, 'selection options are unvalide')
export const ACCESS_DENIED = createError(401, 'you don\'t have the permition to this action')
export const MEMBER_MUST_BELONGS_TO_CHANNEL = createError(400, 'member must belong to channel')
export const CHANNEL_ALREADY_EXISITS = createError (400, 'channel already exists')
export const FAILED_TO_SAVE_MESSENGER = createError (500, 'failed to save new messenger')
export const MESSENGER_ALREADY_EXISITS = createError (400, 'messenger already exists')
export const AUTHENTICATED_MEMBER_IS_NOT_ADMIN = createError(401, 'authenticated member is not an admin')
export const FAILED_TO_SAVE_EVENT = createError (500, 'failed to save new event')
export const UNIQUE_CONSTRAINT_VIOLATION = (entity, key, value) => createError (400, `this ${key} of value ${value} for ${entity} is already taken`)
