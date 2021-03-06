import selector from '../../selector'
import ModeRenderStream from './ModeRenderStream'
import InputNodeRenderStream from './InputNodeRenderStream'
import EditNodeRenderStream from './EditNodeRenderStream'
import EditEdgeRenderStream from './EditEdgeRenderStream'


let stream = new ModeRenderStream(selector.INPUT_NODE, selector.EDIT_NODE, selector.EDIT_EDGE)

stream.pipe(new InputNodeRenderStream(selector.INPUT_NODE))
  .pipe(new EditNodeRenderStream(selector.EDIT_NODE))
  .pipe(new EditEdgeRenderStream(selector.EDIT_EDGE))

export default stream
