import extend from 'xtend'

export default function(edges, nodes, action, push) {
  switch (action.type) {
    case 'create':
      push(
        extend(
          action, {
            sourceId: nodes.getId(action.sourceUrl),
            targetId: nodes.getId(action.targetUrl)
          }
        )
      )
      break
    case 'afterCreate':
      if (edges.verify(nodes, action)) {
        edges.add(nodes, action)
        if (!action.url) {
          push(extend(action, {
            type: 'select'
          }))
        } else {
          push(action)
        }

        push({
          target: 'edge',
          type: 'snapshot',
          edges: edges.toJson()
        })
      } else {
        push(extend(action, {
          type: 'detach'
        }))
      }
      break;
    case 'update':
      edges.set(nodes, action)
      push(action)
      push({
        target: 'edge',
        type: 'snapshot',
        edges: edges.toJson()
      })

  }
}
