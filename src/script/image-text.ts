// This is a component file. You can use this file to define a custom component for your project.
// This component will appear as a custom component in the editor.

import * as ecs from "@8thwall/ecs"; // This is how you access the ecs library.

const rotateModelComponent = ecs.registerComponent({
  name: "Rotate model",
  schema: {
    // target: ecs.eid, // Unique entity reference for the NPC (Entity ID)$
    speed: ecs.i32,
  },
  // schemaDefaults: {
  //   speed: 1,
  // },
  // data: {
  // },

  stateMachine: ({ world, eid, defineState }) => {
    const start = defineState("start")
      .initial()
      .onEnter(() => {
        const currentPos = world.transform.getWorldPosition(eid);

        const name = console.log("current position", currentPos);
      })
      // .onEvent(ecs.input.SCREEN_TOUCH_START, "end")
      // .wait(2000, "end");

      // const end = defineState("end")
      //   .onEnter(() => {
      //     console.log("Entering end state");
      //   })
      .onTick(() => {
        // Get current position
        const currentPos = world.transform.getWorldPosition(eid);

        // Calculate velocity based on position changes
        const deltaX = currentPos.x - 0.01;
        const deltaY = currentPos.y - 0.01;
        const deltaZ = currentPos.z - 0.01;
      });
    //   .wait(2000, "start");
  },

  // add: (world, component) => {
  //   console.log("My component was added to", component.eid);
  // },
  // tick: (world, component) => {
  //   const transform = component.data;
  //   // const transform = ecs.Transform.get(world, eid);
  //   // transform.rotation.y += 0.02 * component.schema.speed; // Rotation Y
  //   // ecs.Transform.set(world, eid, transform);
  //   // console.log("My component is ticking for", component.eid);
  // },
  // remove: (world, component) => {
  // },
  // stateMachine: ({world, eid, schemaAttribute, dataAttribute}) => {
  //   ecs.defineState('default').initial()
  // },
});

export { rotateModelComponent };
