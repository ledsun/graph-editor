import moveNode from './moveNode'

export default function(container, instance, id, name, url) {
  container.insertAdjacentHTML('beforeend', `
  <div id="${id}" class="node" title="${url}">
      ${name}
      <div class="endPoint"></div>
  </div>`)

  // Move node
  moveNode(container, id)

  instance
    .draggable(id)
    .makeSource(id, {
      filter: ".endPoint",
      connectorStyle: {
        strokeStyle: "#5c96bc",
        lineWidth: 2,
        outlineColor: "transparent",
        outlineWidth: 4
      }
    })
    .makeTarget(id, {
      dropOptions: {
        hoverClass: "nodeDragHover"
      },
      allowLoopback: false
    });
}
