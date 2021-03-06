import { CalendarContext } from '@fullcalendar/common'
import { ResourceApi } from './api/ResourceApi'
import { Resource } from './structs/resource'

export interface ResourceLaneHookPropsInput {
  resource: Resource
  context: CalendarContext
}

export interface ResourceLaneHookProps {
  resource: ResourceApi
}
