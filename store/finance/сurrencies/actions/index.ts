import types from "../types"
import commonActions from "../../../CommonFunctions/actions"
import getCourses from "./getCourses"

const financeCoursesActions = {
  /** загрузка курсов валют */
  getCourses,
  changeGetCoursesStatus: commonActions.simple(types.CHANGE_GET_COURSES_STATUS),
}

export default financeCoursesActions
