/**
 * Created by amon on 8/1/17.
 */

import auth from './auth/routes'
import home from './home/routes'
import timeline from './timeline/routes'
import voter from './voter/routes'
import errors from './errors/routes'


export default [...home, ...auth, ...voter, ...timeline, ...errors ]