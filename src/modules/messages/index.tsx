import {ModelHandlers, initModelState} from './model';

import List from './views/List';
import {exportModule} from '@medux/react-web-router';

export default exportModule('messages', initModelState, ModelHandlers, {List});
